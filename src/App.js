import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import NfcManager from 'react-native-nfc-manager';

const App = () => {
  const [hasNfc, setHasNfc] = useState(null);

  useEffect(() => {
    async function checkNfc() {
      const supported = await NfcManager.isSupported();
      if (supported) {
        await NfcManager.start();
      }
      setHasNfc(supported);
    }
    checkNfc();
  }, []);

  if (hasNfc === null) {
    return null;
  } else if (!hasNfc) {
    return (
      <View style={styles.wrapper}>
        <Text>Your devices doesn't support nfc</Text>
      </View>
    );
  }
  return (
    <View style={styles.wrapper}>
      <Text>App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
