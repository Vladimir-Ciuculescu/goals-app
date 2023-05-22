import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Switch,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  Text,
  View,
  NativeBaseProvider,
  HStack,
  Button,
  TextField,
  Divider,
} from 'native-base';
import { useState } from 'react';

interface Goal {
  text: string;
  id: string;
}

export default function App() {
  const [input, setInput] = useState<string>('');
  const [goals, setGoals] = useState<Goal[]>([]);

  const addGoal = () => {
    setGoals((prevGoals) => [
      ...prevGoals,
      { text: input, id: Math.random.toString() },
    ]);
    setInput('');
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <StatusBar style="dark" />

        <View style={{ paddingHorizontal: 10, height: '100%' }}>
          <HStack style={{ width: '100%', justifyContent: 'space-evenly' }}>
            <TextInput
              style={styles.textInput}
              value={input}
              onChangeText={(e) => setInput(e)}
            />
            <Button onPress={addGoal}>Add Goal</Button>
          </HStack>
          <Divider my={5} />
          <View>
            <Text>List of goals</Text>
            <View>
              {goals.length !== 0 ? (
                <FlatList
                  alwaysBounceVertical={false}
                  data={goals}
                  renderItem={(itemData) => {
                    return (
                      <View style={styles.goalItem} key={itemData.item.id}>
                        <Text style={styles.goalText}>
                          {itemData.item.text}
                        </Text>
                      </View>
                    );
                  }}
                  keyExtractor={(itemData) => itemData.id}
                />
              ) : (
                <Text>There are no goals </Text>
              )}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: '70%',
    borderWidth: 1,
    borderColor: 'blue',
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});
