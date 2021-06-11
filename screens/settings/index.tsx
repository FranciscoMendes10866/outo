import * as React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

import { useStore } from '../../store'

export default function Settings() {
  const { setUsername } = useStore()
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
      <View style={styles.button}>
        <Button title="Sign out" onPress={() => setUsername(null)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
});
