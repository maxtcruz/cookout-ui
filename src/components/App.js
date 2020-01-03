import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet
} from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Navigator from "./Navigator";

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.safeAreaView}>
                <Navigator />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: Colors.lighter,
    flex: 1
  }
});

export default App;
