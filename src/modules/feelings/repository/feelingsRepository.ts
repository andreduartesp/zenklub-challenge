import fetchWithTimeout from "../../../shared/fetchWithTimeout"

const getFeelings = async (): Promise<feeling[]> => {
  return await fetchWithTimeout<feeling[]>("https://run.mocky.io/v3/e62afb78-b600-4984-8b71-8bf32153e887", {})
}

export default { getFeelings }
