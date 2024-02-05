import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('Animations')}>
        <Text>Animations</Text>
      </Pressable>
    </View>
  );
};
