class FeelingScoreViewModel {
  navigation: any

  constructor(navigation: any) {
    this.navigation = navigation
  }

  navigateBack() {
    this.navigation.goBack()
  }
}

export default FeelingScoreViewModel
