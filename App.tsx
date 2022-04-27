import Feelings from './src/modules/feelings'
import FeelingScore from './src/modules/feelingScore'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Feelings'
          component={Feelings}
          options={{ title: 'How are you feeling?' }}
        />
        <Stack.Screen
          name='FeelingScore'
          component={FeelingScore}
          options={{ title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
