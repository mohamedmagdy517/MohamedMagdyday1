import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import CustomComp from './components/main'

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

export default function App() {
  return (

    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Task one Create CV
      </Text>
      <Card>
        <Header />
    <Main />
      // <Footer />
    
      </Card>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});








