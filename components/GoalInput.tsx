import { useState } from 'react';
import { Button, HStack } from 'native-base';
import { TextInput, StyleSheet } from 'react-native';

interface GoalInputProps {
  addGoal: (e: string) => void;
}

const GoalInput: React.FC<GoalInputProps> = ({ addGoal }) => {
  const [input, setInput] = useState<string>('');

  const addGoalHandler = () => {
    addGoal(input);
    setInput('');
  };

  return (
    <HStack style={{ width: '100%', justifyContent: 'space-evenly' }}>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={(e) => setInput(e)}
      />
      <Button onPress={addGoalHandler}>Add Goal</Button>
    </HStack>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '70%',
    borderWidth: 1,
    borderColor: 'blue',
  },
});

export default GoalInput;
