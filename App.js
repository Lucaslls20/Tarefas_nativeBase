import React, { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { NativeBaseProvider, Box, Text, Button, VStack, HStack, Input } from 'native-base';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { key: Math.random().toString(), value: task }]);
      setTask('');
    }
  };

  const removeTask = () => {
    if (tasks.length > 0) {
      const updatedTasks = tasks.slice(0, -1);
      setTasks(updatedTasks);
    }
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <VStack space={4} alignItems="center" width="90%">
          <Text fontSize="xl">Lista de Tarefas</Text>
          <HStack space={2} alignItems="center" width="100%">
            <Input
              placeholder="Adicionar tarefa"
              value={task}
              onChangeText={setTask}
              flex={1}
            />
            <Button onPress={addTask}>Adicionar</Button>
            <Button onPress={removeTask}>Remover</Button>
          </HStack>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <Box
                borderBottomWidth={1}
                borderColor="coolGray.200"
                pl={["0", "4"]}
                pr={["0", "5"]}
                py="2"
              >
                <Text>{item.value}</Text>
              </Box>
            )}
          />
        </VStack>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
