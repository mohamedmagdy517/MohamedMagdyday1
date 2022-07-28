
import * as React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView,FlatList} from 'react-native';
import react from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import ProgressBar from "@ramonak/react-progress-bar"

const Main = ()=>{
return(
  <SafeAreaView  >
  <View style={mystyle.container}> 
    <ProgressBar completed={60} style={mystyle.barcross}/>
    <Text style={mystyle.text}> HTML </Text>
      <ProgressBar completed={180} maxCompleted={200} style={mystyle.barcross} />
      <Text style={mystyle.text}> CSS </Text>
      <ProgressBar completed={60} />
        <Text style={mystyle.text}> Angular </Text>
      <ProgressBar completed={60} />
       <Text style={mystyle.text}> ReactNAtive </Text>
      <ProgressBar completed={60} />



 </View>
 </SafeAreaView>
)


}

const mystyle= StyleSheet.create({
container:{
flex:1,
// justifyContent:'center',
// alignItems:'center',
backgroundColor: 'black',
marginTop:30



 



},

image: {
  width:200,
  height:200,
 borderRadius:200/2
 


},
text:{
marginTop:30,
fontSize:20,
// fontWeight:'bold',
color:'white'
},
barmain:{
marginTop:30,
marginBottom:30,
fontSize:40,
fontWeight:'bold',
paddingBottom:30,
paddingTop:30,
backgroundColor:'balck'
},
barcross:{
marginTop:30,
marginBottom:30,
fontSize:40,
fontWeight:'bold',
paddingBottom:30,
paddingTop:30,
backgroundColor:'balck'
}

});
export default Main;