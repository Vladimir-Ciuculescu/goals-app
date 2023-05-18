import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Switch } from 'react-native';
import {
  Text,
  View,
  NativeBaseProvider,
  HStack,
  Button,
  TextField,
} from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <StatusBar style='dark' />
        <View padding={50}>
          <HStack justifyContent='space-between'>
            <TextField
              style={{ height: 100 }}
              value=''
              placeholder='awd'
              width={'70%'}
            />
            <Button>Add Goal</Button>
          </HStack>
          <View></View>
        </View>
      </SafeAreaView>
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
