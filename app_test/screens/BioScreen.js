import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export default function BioScreen() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuth = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync();
      if (result.success) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    } catch (error) {
      console.log('Authentication error:', error);
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