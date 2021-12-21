import React from 'react';
import { Button as RNButton } from 'react-native';
interface NButtonProps {}
export const Button: React.FC<NButtonProps> = () => {
  return <RNButton title="a" onPress={() => console.log('pressed')}></RNButton>;
};
