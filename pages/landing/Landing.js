import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,  Text, View } from 'react-native';
import styles from './LandingStyle';
import { handlePress } from '../../functions/functions';

export default function Landing() {
    return(
        <View style={styles.container}>
        <Text>Hello World!</Text>
        <TouchableOpacity title= "Hi" style={styles.button} onPress={handlePress}>Click me!!</TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    )    
}