import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [name, setName] = useState("shruti");
  const [people, setPeople] = useState([
    {
      name: "abc",
      key: "1",
    },
    {
      name: "abc",
      key: "2",
    },
    {
      name: "abc",
      key: "3",
    },
    {
      name: "abc",
      key: "4",
    },
  ]);
  const pressHandler = (id) => {
    console.log(id);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Shruti Agarwal you are great</Text>
          <TextInput
            style={styles.input}
            value={name}
            keyboardType="numeric"
            onChangeText={(val) => setName(val)}
          />
          <Text>{name}</Text>
        </View>
        {people.map((val) => (
          <TouchableOpacity onPress={() => pressHandler(val.key)}>
            <View key={val.key} style={styles.list}>
              <Text>{val.name}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <FlatList
          keyExtractor={(item) => item.id}
          data={people}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
        <StatusBar style="dark" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  input: {
    borderColor: "#333",
    borderWidth: 1,
    padding: 20,
  },
  list: {
    margin: 20,
    backgroundColor: "yellow",
    padding: 30,
  },
});
