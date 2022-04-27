import { useEffect, useState } from 'react'
import { getFeelings } from './repository/feelingsRepository'
import Page from './view/Page'

export default function App() {
  const [feelings, setFellings] = useState<feeling[]>([])

  useEffect(() => {
    getFeelings().then(newFeelings => setFellings(newFeelings))
  }, [])

  return (
    <Page feelings={feelings} />
  );
}
