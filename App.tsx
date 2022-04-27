import { View } from 'react-native';
import Feelings from './src/modules/feelings'

export default function App() {
  return (
    <View>
      <View style={{ height: 60 }}></View>
      <Feelings />
    </View>
  );
}
