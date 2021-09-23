import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';
import {
  generateTestCrash,
  hasCrashedInLastSession,
  lastSessionCrashReport
} from 'appcenter-crashes';
import { trackEvent } from 'appcenter-analytics';

export default function Greeting() {
  useEffect(() => {
    checkPreviousSession();
  }, []);

  const checkPreviousSession = async () => {
    const didCrash = await hasCrashedInLastSession();
    if (didCrash) {
      const report = await lastSessionCrashReport();
      Alert.alert('Sorry');
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Crashes"
        onPress={() =>
          trackEvent('calcuate_inflation', {
            Internet: 'WiFi',
            GPS: 'off'
          })
        }
      />
      <Text>Welcome to this CI/CD course!(feauture-3)</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
