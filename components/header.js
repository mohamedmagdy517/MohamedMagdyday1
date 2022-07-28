import * as React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView,FlatList} from 'react-native';
import react from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import ProgressBar from "@ramonak/react-progress-bar"

const Header = ()=>{
return(
  <SafeAreaView  >
  <View style={mystyle.container}> 
  // <Text> Mohamed Magdy </Text>

  <Image
  style={mystyle.image}
  source={{uri:'https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png'}}
  style={mystyle.image}
  />
  
     <View style={mystyle.row}> 
     <AntDesign name="twitter" size={24} color="black" />
     <Ionicons name="md-logo-instagram" size={24} color="black" />
     <Ionicons name="logo-facebook" size={24} color="black" />
    </View>
  <Text style={mystyle.text}> Mohamed Magdy </Text>
   <Text style={mystyle.textfront}> FrontEnd Developer </Text>
 </View>
 </SafeAreaView>
)


}

const mystyle= StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor: 'black',

 



},
row:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor: 'grey',
flexDirection:"row"

 



},

image: {
  width:200,
  height:200,
 borderRadius:200/2
 


},
text:{
marginTop:30,
fontSize:30,
// fontWeight:'bold',
color:'white'
},
textfront:{
marginTop:10,
fontSize:20,
// fontWeight:'bold',
color:'white'
}

});
export default Header;