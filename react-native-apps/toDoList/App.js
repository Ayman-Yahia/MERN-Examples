import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasks}></View>
      <Text style={styles.sectionTitle}>Today's Task</Text>
      <View style={styles.items}>
        {/*  here is were are the tasks */}
        <Task text="task 1111"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasks:{
    paddingTop:80,
    paddingHorizontal:20,

  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{

  }
});
