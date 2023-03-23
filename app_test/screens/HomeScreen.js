import React, { useState, useEffect } from 'react';
import {Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

function HomeScreen({navigation}) {
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
            <Button 
                title="Detail 열기" 
                onPress={()=> navigation.navigate('Detail')}
                />
            <Button 
                title="QR코드 스캔"
                onPress={()=> navigation.navigate('QRcodescan')}
                />
            <Button 
                title="QR코드 생성"
                onPress={()=> navigation.navigate('QRcodemake')}
                />
            {authenticated ? (
                alert('생체 인증 완료')
            ) : (
                <>
                    <Button 
                        title="생체 인증 버튼"
                        onPress={()=> handleAuth()}>
                    </Button>
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
    text: {
      fontSize: 16,
    },
});

export default HomeScreen;