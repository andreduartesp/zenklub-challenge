import fetchWithTimeout from "../../../shared/fetchWithTimeout"

const getFeelings = async (): Promise<feeling[]> => {
  return await fetchWithTimeout<feeling[]>("https://run.mocky.io/v3/40b90967-c822-4a31-9e89-314ae2c3f4c6", {})
}

export { getFeelings }
