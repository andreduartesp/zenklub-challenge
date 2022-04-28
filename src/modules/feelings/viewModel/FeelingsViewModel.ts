import repository from '../repository/feelingsRepository'
import localStorage from '../../../shared/localStorage'

class FeelingsViewModel {
  navigation: any

  constructor(navigation: any) {
    this.navigation = navigation
  }

  getFeelings = async (): Promise<feelingScore[]> => {
    const feelings = await repository.getFeelings()
    const localData = await localStorage.getItem('feelingsScore') ?? []

    return feelings.map((feeling, index) => {
      const feelingData = localData.filter((data: any) => data.id == feeling.id)[0]
      const score = feelingData ? feelingData.score : '100'

      return {
        feeling: feeling.feeling,
        emoji: feeling.emoji,
        id: feeling.id,
        score
      }
    })
  }

  navigateToFeelingScore = (feeling: feeling) => {
    this.navigation.navigate('FeelingScore', { feeling })
  }
}


export default FeelingsViewModel
