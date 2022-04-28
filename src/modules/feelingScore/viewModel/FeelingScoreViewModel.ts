import localStorage from "../../../shared/localStorage"

class FeelingScoreViewModel {
  navigation: any

  constructor(navigation: any) {
    this.navigation = navigation
  }

  navigateBack = () => {
    this.navigation.goBack()
  }

  saveFeelingScore = async (id: number, score: string) => {
    const localData = await localStorage.getItem('feelingsScore') ?? []
    const index = localData.findIndex((data: any) => data.id == id)

    if (index < 0) {
      localData.push({ id, score })
    } else {
      localData[index] = { id, score }
    }

    localStorage.setItem('feelingsScore', localData)
  }
}

export default FeelingScoreViewModel
