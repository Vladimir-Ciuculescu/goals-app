import { useState } from 'react';
import { HStack, VStack } from 'native-base';
import {
  TextInput,
  StyleSheet,
  Modal,
  KeyboardAvoidingView,
  Button,
  Pressable,
  Image,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import GoalImage from '../assets/images/goal.png';

interface GoalInputProps {
  addGoal: (e: string) => void;
  visible: boolean;
  onCancel: () => void;
}

const GoalInput: React.FC<GoalInputProps> = ({
  addGoal,
  visible,
  onCancel,
}) => {
  const [input, setInput] = useState<string>('');

  const addGoalHandler = () => {
    addGoal(input);
    setInput('');
    onCancel();
  };

  return (
    <Modal
      animationType="slide"
      visible={visible}
      style={{ backgroundColor: 'red' }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ backgroundColor: '#311b6c', flex: 1 }}>
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Pressable
              style={{ position: 'absolute', right: 32, top: 64 }}
              onPress={onCancel}>
              <AntDesign name="close" size={24} color="white" />
            </Pressable>
            <VStack
              style={{
                width: '100%',
                alignItems: 'center',
                padding: 16,
                gap: 8,
              }}>
              <Image source={GoalImage} style={{ width: 150, height: 150 }} />

              <TextInput
                style={styles.input}
                value={input}
                onChangeText={(e) => setInput(e)}
              />
              <HStack space={10}>
                <Button
                  onPress={addGoalHandler}
                  title="Add Goal"
                  color="#b180f0"
                />
                <Button onPress={onCancel} title="Cancel" color="#f31282" />
              </HStack>
            </VStack>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    paddingLeft: 10,
  },
});

export default GoalInput;
