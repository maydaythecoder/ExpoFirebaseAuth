import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export const Icon = ({ name, size, color, style }: { name: string, size: number, color: string, style: StyleProp<ViewStyle> }) => {
  return (
    <MaterialCommunityIcons
      name={name as keyof typeof MaterialCommunityIcons.glyphMap}
      size={size}
      color={color}
      style={style as StyleProp<TextStyle>}
    />
  );
};