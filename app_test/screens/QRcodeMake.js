import React from 'react';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QRcodeMake() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <QRCode
        value="자료구조 QR코드 데이터"
        size={200}
        color="black"
        backgroundColor="white"
      />
    </View>
  );
}