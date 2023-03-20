import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export default function BioScreen() {
  const [biometrics, setBiometrics] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setBiometrics(compatible);
    })();
  });
  return (
    <View style={styles.container}>
      <Text>
        {biometrics
          ? 'Your device is compatible with Biometrics'
          : 'Face or Fingerprint scanner is available on this device'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});