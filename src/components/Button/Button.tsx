import React from 'react';
import { Pressable } from 'react-native';
interface NButtonProps {}
export const Button: React.FC<NButtonProps> = ({ children }) => {
  return <Pressable>{children}</Pressable>;
};
