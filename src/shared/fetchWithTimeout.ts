import AbortController from 'abort-controller';

const fetchApi = <T>(
  url: string,
  options: RequestInit,
  timeout?: number,
): Promise<T> => {
  const controller = new AbortController();
  const { signal } = controller;

  const fetchTimeoutToken = setTimeout(() => {
    controller.abort();
  }, timeout);

  const enahancedOptions = {
    ...options,
    headers: options.headers ?? {},
  };

  return fetch(url, { ...enahancedOptions, signal }).then((response) => {
    clearTimeout(fetchTimeoutToken);
    if (!response.ok) {
      const errorObj = {
        status: response.status ? response.status.toString() : '',
        url: response.url,
        message: response.statusText,
      };
      throw errorObj;
    }
    return response.json() as Promise<T>;
  });
};

const fetchWithTimeout = <T>(
  url: string,
  options: RequestInit,
  timeout = 7000,
) => {
  return fetchApi<T>(url, options, timeout);
};

export default fetchWithTimeout;
