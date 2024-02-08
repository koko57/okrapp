import React from 'react';
import {Button, Dimensions, StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

export const PanAnimationScreen = () => {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const pressed = useSharedValue(false);
  const isVisible = useSharedValue(true);

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange(event => {
      offsetX.value = offsetX.value + event.x - 50;
      offsetY.value = offsetY.value + event.y - 50;
    })
    .onFinalize(() => {
      if (
        offsetX.value >= 75 &&
        offsetX.value <= 250 &&
        offsetY.value <= height &&
        offsetY.value >= height - 325
      ) {
        isVisible.value = false;
        pressed.value = false;
        return;
      }

      offsetX.value = withSpring(
        offsetX.value > width / 2 - 50 ? width - 100 : 0,
      );
      offsetY.value = withSpring(
        offsetY.value > height / 2 - 50 ? height - 200 : 0,
      );

      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {translateX: offsetX.value},
      {translateY: offsetY.value},
      {
        scale: withTiming(isVisible.value ? (pressed.value ? 1.2 : 1) : 0),
      },
    ],
    backgroundColor: pressed.value ? '#7e64d5' : '#B58DF1',
    opacity: withTiming(isVisible.value ? 1 : 0),
  }));

  const animatedXStyles = useAnimatedStyle(() => ({
    opacity: withTiming(pressed.value ? 1 : 0),
  }));

  const animatedButtonStyles = useAnimatedStyle(() => ({
    opacity: withTiming(isVisible.value ? 0 : 1),
  }));

  return (
    <View style={styles.container}>
      <GestureDetector gesture={pan}>
        <Animated.View style={[styles.circle, animatedStyles]} />
      </GestureDetector>
      <Animated.View style={animatedButtonStyles}>
        <Button
          title={'Show circle'}
          onPress={() => {
            isVisible.value = true;
            offsetX.value = 0;
            offsetY.value = 0;
          }}
        />
      </Animated.View>
      <Animated.View style={[styles.xCircle, animatedXStyles]}>
        <View style={styles.leftArm} />
        <View style={styles.rightArm} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#7e64d5',
    zIndex: 1,
  },
  xCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#B58DF1',
    borderWidth: 2,
    position: 'absolute',
    top: height - 250,
    left: (width - 100) / 2,
  },
  leftArm: {
    borderColor: '#B58DF1',
    borderWidth: 1,
    width: 1,
    height: 64,
    position: 'absolute',
    transform: [{rotate: '45deg'}, {translateX: 44}, {translateY: -23}],
  },
  rightArm: {
    borderColor: '#B58DF1',
    borderWidth: 1,
    width: 1,
    height: 64,
    position: 'absolute',
    transform: [{rotate: '-45deg'}, {translateX: 23}, {translateY: 44}],
  },
});
