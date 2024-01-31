import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const MainAnimationsScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('Rive')}>
        <Text>Animations</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Lottie')}>
        <Text>Animations</Text>
      </Pressable>
    </View>
  );
};
