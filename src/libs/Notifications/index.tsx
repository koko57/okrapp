import notifee, {TimestampTrigger, TriggerType} from '@notifee/react-native';

export const enableNotifications = async () => {
  // Request permissions for iOS
  await notifee.requestPermission();

  // Create a channel for Android
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  await notifee.displayNotification({
    title: 'Notifications Enabled',
    android: {
      channelId,
    },
  });
};

export const createTriggerNotification = async () => {
  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: Date.now() + 5000,
  };

  await notifee.createTriggerNotification(
    {
      id: '12345678',
      title: "Time's up!",
      android: {
        channelId: 'default',
      },
    },
    trigger,
  );
};
