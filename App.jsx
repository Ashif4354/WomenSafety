

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App() {
  return (
    <View style = {styles.style1}>
      <Text style = {styles.style2}>Why did you install this app woman...</Text>
      <Text style = {styles.style3}>Just Stay at your Home or Kitchen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  style1:{
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
  style2:{
    color:'black',
    fontSize:20
  },
  style3:{
    fontSize:20
  }
  
  },
);

export default App;
