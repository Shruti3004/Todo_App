import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import AddItem from "./components/addTodo";
import Header from "./components/header";
import TodoItem from "./components/todoItem";

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: "buy Coffee",
      key: "1",
    },
    {
      text: "Create an app",
      key: "2",
    },
    {
      text: "Play on the switch",
      key: "3",
    }    
  ]);
  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }
  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddItem submitHandler={submitHandler}  />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    
  },
});
