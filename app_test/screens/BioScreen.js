import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export default function BioScreen() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuth = async () => {
    const isSupported = await LocalAuthentication.hasHardwareAsync();
    if (isSupported) {
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
      if (isEnrolled) {
        const result = await LocalAuthentication.authenticateAsync({
          promptMessage: '로그인을 위해 Face ID를 사용합니다.'
        });
        if (result.success) {
          setAuthenticated(true);
          console.log('Face ID 인증 성공!');
        } else {
          setAuthenticated(false);
          console.log('Face ID 인증 실패!');
        }
      } else {
        console.log('Face ID가 등록되어 있지 않습니다.');
      }
    } else {
    console.log('Face ID를 지원하지 않는 기기입니다.');
}
  };

  return (
    <View style={styles.container}>
      {authenticated ? (
        <Text style={styles.text}>Authenticated</Text>
      ) : (
        <>
          <TouchableOpacity onPress={handleAuth} style={styles.button}>
            <Text style={styles.buttonText}>Authenticate</Text>
          </TouchableOpacity>
          <Text style={styles.text}>Touch the sensor to authenticate</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    fontSize: 16,
  },
});