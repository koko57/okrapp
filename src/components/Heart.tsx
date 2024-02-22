import {
  Blur,
  Canvas,
  Group,
  Path,
  fitbox,
  center,
  mix,
} from '@shopify/react-native-skia';
import React, {useRef} from 'react';
import {
  Easing,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

import {HeartRipple} from './HeartRipple.tsx';
import {beatEasing, useLoop, useSharedValues} from '../libs/Animations';
import {
  CENTER,
  DST,
  DURATION,
  HEART,
  SRC,
  VALUE_COUNT,
} from '../libs/Animations/CONST.ts';

export const Heart = () => {
  const count = useRef(0);
  const values = useSharedValues(0.2, 0.6, 0.9);
  const progress = useLoop({duration: DURATION / 2});
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);

  const rippleAnimation = () => {
    'worklet';
    const sharedValue = values[count.current];
    sharedValue.value = 0;
    sharedValue.value = withDelay(
      100 * count.current,
      withTiming(1, {
        duration: DURATION * 3,
        easing: Easing.linear,
      }),
    );
    count.current = (count.current + 1) % VALUE_COUNT;
  };

  const transform = useDerivedValue(() => [
    {
      scale: mix(
        beatEasing(scale.value - progress.value),
        scale.value + 0.05 * scale.value,
        scale.value,
      ),
    },
  ]);

  const tap = Gesture.Tap().onStart(() => {
    rippleAnimation();
  });

  const pinch = Gesture.Pinch()
    .onUpdate(e => {
      scale.value = Math.max(0.5, Math.min(savedScale.value * e.scale, 1.35));
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  const compose = Gesture.Race(tap, pinch);

  return (
    <GestureDetector gesture={compose}>
      <Canvas style={{flex: 1}}>
        {values.map((val, i) => (
          <HeartRipple key={i} progress={val} scale={scale} />
        ))}
        <Group transform={transform} origin={CENTER}>
          <Group transform={fitbox('contain', SRC, DST)}>
            <Path color="#D52327" path={HEART} />
            <Group>
              <Path
                color="#3f0a0b"
                path={HEART}
                transform={[{scale: 0.9}]}
                origin={center(SRC)}>
                <Blur blur={8} />
              </Path>
            </Group>
          </Group>
        </Group>
      </Canvas>
    </GestureDetector>
  );
};
