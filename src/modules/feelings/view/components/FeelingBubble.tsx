import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface IProps {
  feeling: feelingScore
  onPress: () => void
}

interface ISizes {
  '0': number
  '25': number
  '50': number
  '75': number
  '100': number
}

const sizes: ISizes = {
  '0': 60,
  '25': 70,
  '50': 80,
  '75': 90,
  '100': 100,
}

export default function FeelingBubble({ feeling, onPress }: IProps) {
  const dimension: number = sizes[feeling.score as keyof ISizes]
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={
        [
          styles.container,
          {
            width: dimension,
            height: dimension,
            borderRadius: dimension / 2,
            shadowRadius: dimension / 2,
          }
        ]
      }>
        <Text style={{ fontSize: dimension / 3 }}>
          {feeling.emoji}
        </Text>
        <Text style={[styles.label, { fontSize: dimension / 7 }]}>
          {feeling.feeling}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, .2)',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 5,
  },
  label: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: '500',
  },
  emoji: {
    fontSize: 20,
  }
});
