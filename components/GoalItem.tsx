import { Text, View } from 'native-base';
import { StyleSheet, Pressable } from 'react-native';
import { Goal } from '../interfaces/Goal';

interface GoalItemProps {
  goal: Goal;
  onDelete: (id: string | number) => void;
}

const GoalItem: React.FC<GoalItemProps> = ({ goal, onDelete }) => {
  const deleteGoalHandler = () => {
    onDelete(goal.id);
  };

  return (
    <Pressable onPress={deleteGoalHandler}>
      <View style={styles.goalItem} key={goal.id}>
        <Text style={styles.goalText}>{goal.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
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
