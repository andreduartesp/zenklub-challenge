import { View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import FeelingBubble from './components/FeelingBubble';

interface IProps {
  feelings: feelingScore[]
  onPress: (feeling: feeling) => void
}

export default function Page({ feelings, onPress }: IProps) {
  if (!feelings.length) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {
          feelings.map((feeling, index) => {
            return (
              <FeelingBubble
                key={`FeelingBubble-${index}`}
                feeling={feeling}
                onPress={() => onPress(feeling)}
              />
            )
          })
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#825eeb',
  },
  loading: {
    height: '100%',
    backgroundColor: '#825eeb',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
