import { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native';
import FeelingViewModel from './viewModel/FeelingsViewModel'
import Page from './view/Page'

interface IProps {
  navigation: any
}

export default function Feelings({ navigation }: IProps) {
  const [feelings, setFellings] = useState<feelingScore[]>([])
  const viewModel = new FeelingViewModel(navigation)
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      viewModel.getFeelings().then(newFeelings => setFellings(newFeelings))
    }
  }, [isFocused])

  return (
    <Page feelings={feelings} onPress={viewModel.navigateToFeelingScore} />
  );
}
