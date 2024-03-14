import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Man_hinh_cho_2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_view}>
         <Image style={styles.img} source={require('./img/anh_cuoi2.jpg')}/>
         <Text style={{color:'#FCB0B5',textAlign:'center',fontSize:20,fontWeight:'bold'}}>TOC STUDIO</Text>
         <View style={{flexDirection:'row'}}>
            <Image style={{width:35,height:35,marginLeft:70,marginTop:40}} source={require('./img/heart_1.png')}/>
            <Text style={{width:220,height:192,marginTop:40,marginLeft:20,fontWeight:'bold'}}>Nơi lưu giữ khoảnh khác cùng thời gian</Text>
         </View>
      </View>
      <Image style={{width:90,height:90,marginLeft:170}} source={require('./img/more_1.png')}/>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:50}}>
         <Pressable>
            <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10}}>Skip</Text>
         </Pressable>

         <Pressable>
         <Text style={{fontSize:18,fontWeight:'bold',marginRight:10}}>Next</Text>
         </Pressable>
      </View>
    </View>
  )
}

export default Man_hinh_cho_2

const styles = StyleSheet.create({
   container: {
      backgroundColor:'#F3D9DC',
      width:'100%',
      height:'100%'
   },
   container_view: {
      backgroundColor:'#FFFFFF',
      borderBottomLeftRadius:50,
      borderBottomRightRadius:50,
      width:'100%',
      height:589
   },
   img: {
      width:279,
      height:362,
      margin:70,
      marginBottom:20,
      borderTopLeftRadius:50,
      borderTopRightRadius:50,
      borderBottomLeftRadius:50,
      borderBottomRightRadius:50,
   }
})