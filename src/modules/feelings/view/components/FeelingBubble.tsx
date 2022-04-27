import { View, Text, StyleSheet } from 'react-native';

interface IProps {
  feeling: feeling
  size: string
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

export default function FeelingBubble({ feeling, size }: IProps) {
  const dimension: number = sizes[size as keyof ISizes]
  return (
    <View style={
      [
        styles.container,
        { width: dimension, height: dimension, borderRadius: dimension / 2 }
      ]
    }>
      <Text style={{ fontSize: dimension / 3 }}>
        {feeling.emoji}
      </Text>
      <Text style={[styles.label, { fontSize: dimension / 4 }]}>
        {feeling.feeling}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(90, 90, 90, .3)',
    alignItems: 'center',
    justifyContent: 'center',
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
