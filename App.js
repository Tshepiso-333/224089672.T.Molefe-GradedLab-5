import React, { useState } from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet
} from 'react-native';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    setTasks([
      ...tasks,
      { id: Date.now().toString(), text: input, completed: false }
    ]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoiding}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Task Tracker</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="Add a new task..."
              value={input}
              onChangeText={setInput}
              onSubmitEditing={addTask}
              returnKeyType="done"
            />
            <Pressable style={[styles.button, { marginLeft: 8 }]} onPress={addTask}>
              <Text style={styles.buttonText}>Add</Text>
            </Pressable>
          </View>
          <ScrollView style={styles.scroll}>
            {tasks.length === 0 ? (
              <Text style={styles.emptyText}>No tasks yet. Add one!</Text>
            ) : (
              tasks.map(task => (
                <View
                  key={task.id}
                  style={[
                    styles.taskItem,
                    {
                      opacity: task.completed ? 0.5 : 1
                    }
                  ]}
                >
                  <Pressable onPress={() => toggleTask(task.id)} style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 18,
                        textDecorationLine: task.completed ? 'line-through' : 'none'
                      }}
                    >
                      {task.text}
                    </Text>
                  </Pressable>
                  <Pressable onPress={() => deleteTask(task.id)}>
                    <Text style={styles.deleteText}>Delete</Text>
                  </Pressable>
                </View>
              ))
            )}
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
  keyboardAvoiding: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 16
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16
  },
  button: {
    backgroundColor: '#6200ee',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  scroll: {
    marginTop: 10
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  deleteText: {
    color: '#d11589',
    fontWeight: 'bold',
    marginLeft: 12
  }
});

export default App;
