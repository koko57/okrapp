import React from 'react';
import {Text, View} from 'react-native';
import LottieView from 'lottie-react-native';

export const LottieScreen = () => {
  return (
    <View>
      <View style={{width: '100%', height: '50%'}}>
        <Text>.json</Text>
        <LottieView
          source={require('../assets/nyan.json')}
          style={{width: '100%', height: '100%'}}
          autoPlay
          loop
        />
      </View>
      <View style={{width: '100%', height: '50%'}}>
        <Text>.lottie</Text>
        <LottieView
          source={require('../assets/nyan.lottie')}
          style={{width: '100%', height: '100%'}}
          autoPlay
          loop
        />
      </View>
    </View>
  );
};
