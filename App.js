import React, { useState } from "react";
import Components from "./ReactNativeElements";
import Styles from "./styles";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([
      ...tasks,
      { id: Date.now().toString(), text: input, completed: false },
    ]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Components.SafeAreaView style={Styles.toDoSafeArea}>
      <Components.KeyboardAvoidingView
        style={Styles.toDoKeyboardAvoiding}
        behavior={Components.Platform.OS === "ios" ? "padding" : undefined}
      >
        <Components.View style={Styles.toDoContainer}>
          <Components.Text style={Styles.toDoTitle}>
            Task Tracker
          </Components.Text>
          <Components.View style={Styles.toDoInputRow}>
            <Components.TextInput
              style={Styles.toDoInput}
              placeholder="Add a new task..."
              placeholderTextColor="#b2b7d1"
              value={input}
              onChangeText={setInput}
              onSubmitEditing={addTask}
              returnKeyType="done"
            />
            <Components.Pressable
              style={Styles.toDoAddButton}
              onPress={addTask}
            >
              <Components.Text style={Styles.toDoAddButtonText}>
                Add
              </Components.Text>
            </Components.Pressable>
          </Components.View>
          <Components.ScrollView style={Styles.toDoScroll}>
            {tasks.length === 0 ? (
              <Components.Text style={Styles.toDoEmptyText}>
                No tasks yet. Add one!
              </Components.Text>
            ) : (
              tasks.map((task) => (
                <Components.View key={task.id} style={Styles.toDoListItem}>
                  <Components.View style={{ flex: 1 }}>
                    <Components.Text
                      style={[
                        Styles.toDoTaskText,
                        task.completed && Styles.toDoTaskTextCompleted,
                      ]}
                    >
                      {task.text}
                    </Components.Text>
                  </Components.View>
                  <Components.View style={Styles.toDoToggleRow}>
                    <Components.Pressable
                      onPress={() => toggleTask(task.id)}
                      style={[
                        Styles.toDoToggle,
                        task.completed && Styles.toDoToggleDone,
                      ]}
                    >
                     
                      <Components.Text
                        style={[
                          Styles.toDoToggleLabel,
                          {
                            position: "absolute",
                            left: 12,
                            color: task.completed ? "#fff8" : "#fff",
                            opacity: task.completed ? 0 : 1,
                            zIndex: 1,
                          },
                        ]}
                      >
                        Undone
                      </Components.Text>
                      <Components.Text
                        style={[
                          Styles.toDoToggleLabel,
                          {
                            position: "absolute",
                            right: 12,
                            color: task.completed ? "#fff" : "#fff8",
                            opacity: task.completed ? 1 : 0,
                            zIndex: 1,
                          },
                        ]}
                      >
                        Done
                      </Components.Text>
                      <Components.View
                        style={[
                          Styles.toDoToggleKnob,
                          { left: task.completed ? 44 : 4 },
                        ]}
                      >
                        <Components.Text
                          style={{
                            color: task.completed ? "#2ecc71" : "#e74c3c",
                            fontWeight: "bold",
                            fontSize: 12,
                          }}
                        >
                          {task.completed ? "✓" : ""}
                        </Components.Text>
                      </Components.View>
                    </Components.Pressable>
                  </Components.View>
                  <Components.Pressable
                    style={Styles.toDoDeleteButton}
                    onPress={() => deleteTask(task.id)}
                  >
                    <Components.Text style={Styles.toDoDeleteButtonText}>
                      Delete
                    </Components.Text>
                  </Components.Pressable>
                </Components.View>
              ))
            )}
          </Components.ScrollView>
        </Components.View>
      </Components.KeyboardAvoidingView>
    </Components.SafeAreaView>
  );
};

export default App;
