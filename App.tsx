import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, FlatList, Button } from 'react-native';
import { Text, View, NativeBaseProvider } from 'native-base';
import GoalItem from './components/GoalItem';
import { Goal } from './interfaces/Goal';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const addGoal = (input: string) => {
    setGoals((prevGoals) => [
      ...prevGoals,
      { text: input, id: Math.random().toString() },
    ]);
  };

  const deleteGoal = (id: string | number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  const startAddGoal = () => {
    setModalVisible(true);
  };

  const candelAddGoal = () => {
    setModalVisible(false);
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <StatusBar style="light" />
        <View style={{ paddingHorizontal: 10, height: '100%' }}>
          <Button onPress={startAddGoal} title="Add goal" color="#b180f0" />
          <GoalInput
            visible={modalVisible}
            addGoal={addGoal}
            onCancel={candelAddGoal}
          />

          <View>
            {goals.length !== 0 && (
              <FlatList
                alwaysBounceVertical={false}
                data={goals}
                renderItem={({ item }) => (
                  <GoalItem goal={item} onDelete={deleteGoal} />
                )}
                keyExtractor={(itemData: any) => itemData.id}
              />
            )}
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
