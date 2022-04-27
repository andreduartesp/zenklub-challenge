import repository from '../repository/feelingsRepository'

class FeelingsViewModel {
  navigation: any

  constructor(navigation: any) {
    this.navigation = navigation
  }

  getFeelings = async (): Promise<feelingScore[]> => {
    const feelings = await repository.getFeelings()

    return feelings.map((feeling, index) => {
      return {
        feeling: feeling.feeling,
        emoji: feeling.emoji,
        id: feeling.id,
        score: `${(index % 5) * 25}`
      }
    })
  }

  navigateToFeelingScore = (id: number) => {
    this.navigation.navigate('FeelingScore')
  }
}


export default FeelingsViewModel
