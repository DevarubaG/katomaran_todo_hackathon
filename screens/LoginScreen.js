// screens/LoginScreen.js
import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

export default function LoginScreen({ request, promptAsync }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Katomaran Todo App</Text>
      <Button
        title="Sign in with Google"
        disabled={!request}
        onPress={() => {
          console.log("🟩 Sign-In Button Clicked");
          promptAsync();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
});
