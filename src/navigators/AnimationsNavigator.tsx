import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainAnimationsScreen} from '../screens/MainAnimationsScreen';
import {RiveScreen} from '../screens/RiveScreen';
import {LottieScreen} from '../screens/LottieScreen';
import {PanAnimationScreen} from '../screens/PanAnimationScreen';
import {SkiaScreen} from '../screens/SkiaScreen.tsx';
import {AnimationsStackParamList} from '../types/navigation';

const Stack = createNativeStackNavigator<AnimationsStackParamList>();

export const AnimationNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainAnimations" component={MainAnimationsScreen} />
      <Stack.Screen name="Rive" component={RiveScreen} />
      <Stack.Screen name="Lottie" component={LottieScreen} />
      <Stack.Screen name="PanAnimation" component={PanAnimationScreen} />
      <Stack.Screen name="Skia" component={SkiaScreen} />
    </Stack.Navigator>
  );
};
