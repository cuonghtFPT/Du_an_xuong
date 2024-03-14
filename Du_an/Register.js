import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Register = () => {
  return (
    <View>
      <View style={{flexDirection:'row'}}>
         <View style={{backgroundColor:'#FCF0F0',borderBottomLeftRadius:80,borderBottomRightRadius:80,width:200,height:115}}></View>
         <View  style={{backgroundColor:'#FCF0F0',borderBottomLeftRadius:130,borderBottomRightRadius:100,width:240,height:165}}></View>
      </View>

      <Text style={{fontSize:30,fontWeight:'bold',textAlign:'center'}}>Register For</Text>
      <Text style={{fontSize:30,fontWeight:'bold',textAlign:'center',color:'#FCB0B5'}}>TOC STUSIO</Text>

      <View style={{width:308,height:345,backgroundColor:'#FCF0F0',marginLeft:55,marginTop:10,borderBottomLeftRadius:50,borderTopLeftRadius:50,borderBottomRightRadius:50,borderTopRightRadius:50}}>
         <TextInput placeholder='Enter your name' style={{backgroundColor:'white',height:35,width:225,marginLeft:40,marginTop:45}}/>
         <TextInput placeholder='Enter your pass' style={{backgroundColor:'white',height:35,width:225,marginLeft:40,marginTop:25}}/>
         <TextInput placeholder='Enter your pass' style={{backgroundColor:'white',height:35,width:225,marginLeft:40,marginTop:25}}/>
         <TextInput placeholder='Enter your pass' style={{backgroundColor:'white',height:35,width:225,marginLeft:40,marginTop:25}}/>
         <Pressable style={{backgroundColor:'#FCB0B5',width:225,height:41,marginLeft:40,marginTop:20,borderRadius:10}}>
            <Text style={{color:'white',fontSize:20,fontWeight:'bold',textAlign:'center',marginTop:5}}>Register</Text>
         </Pressable>
      </View>
      <Text style={{textAlign:'center',marginTop:20,fontSize:20,fontWeight:'bold'}}>---- Or Login Width ----</Text>

      <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}>
         <View style={{borderWidth:1,width:65,height:42}}>
            <Image style={{width:30,height:30,marginLeft:15,marginTop:5}} source={require('./img/facebook.png')}/>
         </View>
         <View style={{borderWidth:1,width:65,height:42}}>
            <Image style={{width:30,height:30,marginLeft:15,marginTop:5}} source={require('./img/search.png')}/>
         </View>
         <View style={{borderWidth:1,width:65,height:42}}>
            <Image style={{width:30,height:30,marginLeft:15,marginTop:5}} source={require('./img/apple.png')}/>
         </View>
      </View>

      <View style={{flexDirection:'row',marginTop:40,marginLeft:90}}>
         <Text style={{fontWeight:'bold'}}>Don’t have an accout?</Text>    
         <Pressable>
         <Text style={{fontSize:15,marginLeft:5,fontWeight:'bold',color:'#FCB0B5'}}>Regiter now</Text>
         </Pressable>
        </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({})