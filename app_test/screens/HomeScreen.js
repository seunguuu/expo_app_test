import React from 'react';
import {Button, View} from 'react-native';

function HomeScreen({navigation}) {
    return (
        <View>
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
            <Button 
                title="생체 인증"
                onPress={()=> navigation.navigate('BioScan')}
                />
        </View>
    );
}

export default HomeScreen;