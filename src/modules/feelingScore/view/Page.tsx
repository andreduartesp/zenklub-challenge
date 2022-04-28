import { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native'
import Slider from '@react-native-community/slider'

interface IProps {
  feeling: feelingScore
  back: () => void
  saveFeeling: (id: number, score: string) => void
}

const translation = {
  "0": "Slightly",
  "25": 'A little',
  "50": 'Fairly',
  "75": 'Very',
  "100": 'Extremely',
}

export default function Page({ feeling, back, saveFeeling }: IProps) {
  const [intensity, setIntensity] = useState(feeling.score)
  const left = (parseInt(intensity) * (Dimensions.get('window').width - 60) / 100 - 15);

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
      <Text style={[styles.slideUpLabel, { left: left, fontSize: 26 }]}>
        {intensity}%
      </Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        step={25}
        thumbTintColor={"#825eeb"}
        onSlidingComplete={value => {
          setIntensity(`${value}`)
          saveFeeling(feeling.id, `${value}`)
        }}
        value={parseInt(intensity)}
      />
      <Text style={[styles.slideDownLabel, { left: left }]}>
        {translation[intensity as keyof typeof translation]}
      </Text>
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
    paddingTop: 20,
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
  },
  slideUpLabel: {
    width: 70,
    textAlign: 'center',
    fontSize: 26,
    color: '#825eeb',
    fontWeight: '700',
  },
  slideDownLabel: {

  }
})
