import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../components/Button';

export const MainAnimationsScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button onPress={() => navigation.navigate('Rive')} text={'Rive'} />
      <Button onPress={() => navigation.navigate('Lottie')} text={'Lottie'} />
      <Button onPress={() => navigation.navigate('PanAnimation')} text={'PanAnimation'} />
    </View>
  );
};
