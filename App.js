// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <View style={styles.container}>
      <TodoList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});

export default App;
