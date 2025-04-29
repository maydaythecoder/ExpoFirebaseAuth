import React, { useCallback } from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { Colors } from '@/config';

interface ButtonProps {
  children?: React.ReactNode;
  onPress: () => void;
  activeOpacity?: number;
  borderless?: boolean;
  title?: string;
  style?: StyleProp<ViewStyle>;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  activeOpacity = 0.3,
  borderless = false,
  title,
  style
}) => {
  const _style = useCallback(({ pressed }: { pressed: boolean }) => [
    style,
    { opacity: pressed ? activeOpacity : 1 }
  ], [style, activeOpacity]);

  if (borderless) {
    return (
      <Pressable onPress={onPress} style={_style}>
        <Text style={styles.borderlessButtonText}>{title}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable onPress={onPress} style={_style}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  borderlessButtonText: {
    fontSize: 16,
    color: Colors.blue
  }
});