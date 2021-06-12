import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

function AddItem({ submitHandler }) {
  const [todo, setNewTodo] = useState("");
  const changeHandler = (val) => {
    setNewTodo(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo.."
        value={todo}
        onChangeText={(val) => changeHandler(val)}
      />
      <Button
        onPress={() => {
          submitHandler(todo);
          setNewTodo("");
        }}
        title="Add Todo"
        color="coral"
      />
    </View>
  );
}

export default AddItem;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
