import fetchWithTimeout from "../../../shared/fetchWithTimeout"

const getFeelings = async (): Promise<feeling[]> => {
  return await fetchWithTimeout<feeling[]>("https://run.mocky.io/v3/284d8d79-6389-47bf-96d7-77c0b308504a", {})
}

export default { getFeelings }
