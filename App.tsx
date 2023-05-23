import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { Text, View, NativeBaseProvider, Divider } from 'native-base';
import GoalItem from './components/GoalItem';
import { Goal } from './interfaces/Goal';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  const addGoal = (input: string) => {
    setGoals((prevGoals) => [
      ...prevGoals,
      { text: input, id: Math.random().toString() },
    ]);
  };

  const deleteGoal = (id: string | number) => {
    console.log(id);
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  useEffect(() => {
    console.log(goals);
  }, [goals]);

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <StatusBar style="dark" />

        <View style={{ paddingHorizontal: 10, height: '100%' }}>
          <GoalInput addGoal={addGoal} />
          <Divider my={5} />
          <View>
            <Text>List of goals</Text>
            <View>
              {goals.length !== 0 ? (
                <FlatList
                  alwaysBounceVertical={false}
                  data={goals}
                  renderItem={({ item }) => (
                    <GoalItem goal={item} onDelete={deleteGoal} />
                  )}
                  keyExtractor={(itemData: any) => itemData.id}
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
});
