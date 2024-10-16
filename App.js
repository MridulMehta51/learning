import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './frontend/src/login/Login';
import SignUpScreen from './frontend/SignUpScreen/SignUpScreen';
import ProfileSetupScreen from './frontend/src/ProfileSetupScreen/ProfileSetupScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Configure StatusBar appearance */}
      <StatusBar style="light" backgroundColor="#FF957C" />
      <Login />
      <SignUpScreen/>
      {/* <ProfileSetupScreen/> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF957C',  // Match the Login screen background color
  },
});
