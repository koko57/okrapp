declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined;
  Animations: undefined;
  Notifications: undefined;
};

export type AnimationsStackParamList = {
  MainAnimations: undefined;
  Rive: undefined;
  Lottie: undefined;
  PanAnimation: undefined;
  Skia: undefined;
};

export type NotificationsStackParamsList = {
  MainNotifications: undefined;
};
