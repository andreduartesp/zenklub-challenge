import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IProps {
  feeling: feelingScore
  back: () => void
}

const translation = {
  "0": "Slightly",
  "25": 'A little',
  "50": 'Fairly',
  "75": 'Very',
  "100": 'Extremely',
}

export default function Page({ feeling, back }: IProps) {
  const [intensity, setIntensity] = useState(feeling.score)

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.emoji}>{feeling.emoji}</Text>
        <Text style={styles.title}>I'm feeling</Text>
        <Text style={styles.feeling}>
          {`${translation[intensity as keyof typeof translation]} ${feeling.feeling}`}
        </Text>
        <Text style={styles.subtitle}>Chose the intensity of your feeling</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity onPress={() => back()}>
          <View style={styles.button}>
            <Text style={styles.textButton}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  emoji: {
    fontSize: 42,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  feeling: {
    fontSize: 24,
    fontWeight: '700',
    color: '#825eeb'
  },
  subtitle: {
    fontSize: 14,
    color: '#b3b3b3'
  },
  body: {
    backgroundColor: '#825eeb',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    width: 300,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#825eeb',
    fontSize: 18,
    fontWeight: '700',
  }
})
