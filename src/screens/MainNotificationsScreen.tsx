import React, {useState} from 'react';
import {View, Button} from 'react-native';
import {
  createTriggerNotification,
  enableNotifications,
} from '../libs/Notifications/notifee.ts';

export const MainNotificationsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleEnableNotifications = async () => {
    await enableNotifications();
    setNotificationsEnabled(true);
  };

  return (
    <View>
      {notificationsEnabled ? (
        <Button onPress={createTriggerNotification} title="Set notification" />
      ) : (
        <Button
          onPress={handleEnableNotifications}
          title="Enable notifications"
        />
      )}
    </View>
  );
};
