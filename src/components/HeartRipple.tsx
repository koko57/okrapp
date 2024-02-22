import {Blur, Group, Path, fitbox, mix} from '@shopify/react-native-skia';
import React from 'react';
import type {SharedValue} from 'react-native-reanimated';
import {useDerivedValue} from 'react-native-reanimated';
import {CENTER, DST, HEART, SRC} from '../libs/Animations/CONST.ts';

type Props = {
  progress: SharedValue<number>;
  scale: SharedValue<number>;
};

export const HeartRipple = ({progress, scale}: Props) => {
  const transform = useDerivedValue(() => [
    {scale: mix(progress.value, scale.value, 3)},
  ]);
  const blur = useDerivedValue(() => mix(progress.value, scale.value, 4));
  const strokeWidth = useDerivedValue(() => mix(progress.value, 4, 0));

  return (
    <Group transform={transform} origin={CENTER}>
      <Group transform={fitbox('contain', SRC, DST)}>
        <Path
          color="#D52327"
          path={HEART}
          style="stroke"
          strokeWidth={strokeWidth}>
          <Blur blur={blur} />
        </Path>
      </Group>
    </Group>
  );
};
