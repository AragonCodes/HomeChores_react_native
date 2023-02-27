import { StatusBar } from 'expo-status-bar';
import { Box, NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Box>Hello world</Box>
        <StatusBar style='auto' />
      </View>
    </NativeBaseProvider>
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
