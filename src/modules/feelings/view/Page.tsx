import { View } from 'react-native';
import FeelingBubble from './components/FeelingBubble';

interface IProps {
  feelings: feeling[]
}

export default function Page({ feelings }: IProps) {
  return (
    <View>
      {
        feelings.map((feeling, index) => {
          return (
            <FeelingBubble
              key={`FeelingBubble-${index}`}
              feeling={feeling}
              size={`${(index % 5) * 25}`}
            />
          )
        })
      }
    </View>
  );
}
