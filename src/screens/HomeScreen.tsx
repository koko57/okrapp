import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../components/Button';

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('Animations')}
        text={'Animations'}
      />
    </View>
  );
};
