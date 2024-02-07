import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type Props = {
  onPress: () => void;
  text: string;
};

export const Button = ({onPress, text}: Props) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: '#3d3d3d',
  },
});
