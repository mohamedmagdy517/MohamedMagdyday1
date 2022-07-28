
import * as React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView,FlatList} from 'react-native';
import react from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import ProgressBar from "@ramonak/react-progress-bar"

const Footer = ()=>{
return(
  <SafeAreaView style={mystyle.barcross} >
  
  <View style={mystyle.container}> 
   
    <Text style={mystyle.text}> AGE </Text>
    <Text style={mystyle.text}> Number </Text>
 
 
 </View>
  <View style={mystyle.container}> 
   
    <Text style={mystyle.text}> 25 </Text>
     <Text style={mystyle.textfront}> '01127125016' </Text>
    
     
     
 </View>
 
 </SafeAreaView>
 
)


}

const mystyle= StyleSheet.create({
container:{
flex:1,
// justifyContent:'center',
// alignItems:'center',
backgroundColor: 'gold',
marginTop:30, 
flexDirection:"column",
marginLeft:20,
width:500,
height:50,






 



},

image: {
  width:200,
  height:200,
 borderRadius:200/2
 


},
text:{

fontSize:20,

// fontWeight:'bold',
color:'black',
marginLeft:20
},
textfront:{
// marginTop:30,
// fontSize:20,
// fontWeight:'bold',
color:'black',
marginLeft:20,
fontSize:15,
backgroundColor: 'gold',
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
flexDirection:'row'
}

});
export default Footer;