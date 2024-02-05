declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined;
  Animations: undefined;
};

export type AnimationsStackParamList = {
  MainAnimations: undefined;
  Rive: undefined;
  Lottie: undefined;
};
