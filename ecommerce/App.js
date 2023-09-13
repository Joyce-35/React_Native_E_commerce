import { StyleSheet, View } from 'react-native';
import MainScreen from './MainScreen';
import Details from './Details';

export default function App() {
  return (
    
    <View style={styles.container}>
  
 <Details />
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ebedf0',
  },
});
