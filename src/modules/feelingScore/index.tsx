import Page from "./view/Page"
import FeelingScoreViewModel from './viewModel/FeelingScoreViewModel'

interface IProps {
  navigation: any
  route: any
}

export default function FeelingScore({ navigation, route }: IProps) {
  const { feeling } = route.params;
  const viewModel = new FeelingScoreViewModel(navigation)

  return (
    <Page
      feeling={feeling}
      back={viewModel.navigateBack}
      saveFeeling={viewModel.saveFeelingScore}
    />
  );
}
