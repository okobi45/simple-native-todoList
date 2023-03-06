import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskManger}></View>
      <Text style={styles.mainTitle}>Daily Task</Text>
      <View style={styles.items}>
        <Task text={'Task 1'} />
        <Task text={'Task 2'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskManger: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {

  },
});
