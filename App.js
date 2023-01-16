import { StatusBar } from 'expo-status-bar';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Button, StyleSheet, Text, View } from 'react-native';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <Button onPress={() => navigation.navigate('Detail')} title='Go to Detail' />
    <StatusBar style='auto' />
  </View>
);

const Detail = () => (
  <View style={styles.container}>
    <Text>This is a Detail component</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: { title: 'Home' }
  },
  Detail: {
    screen: Detail,
    navigationOptions: { title: 'Detail' }
  }
}, { initialRouteName: 'Home' });

export default createAppContainer(AppNavigator);