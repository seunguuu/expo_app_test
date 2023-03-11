import React from 'react';
import {Button, View} from 'react-native';

function HomeScreen({navigation}) {
    return (
        <View>
            <Button 
                title="Detail 열기" 
                onPress={()=> navigation.navigate('Detail')}
                // navigate 함수가 아닌 push를 이용하여 이동 가능
                // onPress={()=> navigation.push('Detail')}
                />
            <Button 
                title="바코드 스캔"
                onPress={()=> navigation.navigate('Barcodescan')}
                />
            <Button 
                title="바코드 생성"
                onPress={()=> navigation.navigate('Barcodemake')}
                />
        </View>
    );
}

export default HomeScreen;