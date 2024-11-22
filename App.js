import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handlePress = () =>{
    console.log("Button pressed!!")
  }
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <TouchableOpacity title= "Hi" style={styles.button} onPress={handlePress}>Click me!!</TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor:"red",
    padding: "20px"
  }
});
