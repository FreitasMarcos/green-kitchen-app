import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Route from './src/routes/route';
import { UserContextProvider } from './src/Contexts/UserContext';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar animated={false} />
      <UserContextProvider>
        <Route />
      </UserContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});