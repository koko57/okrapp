import {SCREENS} from './screens.ts';
import {ROUTES} from './routes.ts';

export const linking = {
  prefixes: ['okrapp://', 'https://okrapp.com'],
  config: {
    screens: {
      [SCREENS.HOME]: ROUTES.HOME,
      [SCREENS.ANIMATIONS.MAIN]: {
        path: ROUTES.ANIMATIONS,
        screens: {
          [SCREENS.ANIMATIONS.RIVE]: ROUTES.ANIMATIONS.RIVE,
          [SCREENS.ANIMATIONS.LOTTIE]: ROUTES.ANIMATIONS.LOTTIE,
          [SCREENS.ANIMATIONS.PAN_ANIMATION]: ROUTES.ANIMATIONS.PAN_ANIMATION,
          [SCREENS.ANIMATIONS.SKIA]: ROUTES.ANIMATIONS.SKIA,
        },
      },
      [SCREENS.NOTIFICATIONS.MAIN]: ROUTES.NOTIFICATIONS.MAIN,
    },
  },
};
