import { useEffect, useState } from 'react'
import { View } from 'react-native'
import FeelingViewModel from './viewModel/FeelingsViewModel'
import Page from './view/Page'

interface IProps {
  navigation: any
}

export default function Feelings({ navigation }: IProps) {
  const [feelings, setFellings] = useState<feelingScore[]>([])
  const viewModel = new FeelingViewModel(navigation)

  useEffect(() => {
    viewModel.getFeelings().then(newFeelings => setFellings(newFeelings))
  }, [])

  return (
    <Page feelings={feelings} onPress={viewModel.navigateToFeelingScore} />
  );
}
