import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useCountStore } from '../store/useCountStore'; // Import the store

// Keep RootStackParamList or import from navigation if defined globally
type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { count, increment, decrement } = useCountStore(); // Use the store

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.countText}>Count: {count}</Text>
      <View style={styles.buttonRow}>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} />
      </View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  countText: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 20,
  }
});

export default HomeScreen;
