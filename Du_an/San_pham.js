import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Screen } from 'react-native-screens'

const San_pham = () => {
  return (
    <ScrollView>
      <View>
      <Image style={{width:'100%',height:210}} source={require('./img/anh_cuoi6.jpg')}/>
      <Text style={{fontSize:25,fontWeight:'bold',color:'#FCB0B5',marginLeft:10}}>In ảnh</Text>
      <Text style={{fontSize:15,color:'#000000',marginLeft:10,marginTop:7}}>Mô tả sản phẩm</Text>
      <Text style={{fontSize:25,fontWeight:'bold',color:'#FCB0B5',marginLeft:10}}>Tùy chọn</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <Text style={{fontSize:15,color:'#000000',marginLeft:10,marginTop:7,fontWeight:'bold'}}>Kích thước</Text>

         <Pressable style={{marginTop:8,marginRight:20,borderWidth:1,width:200}}>
            <Text style={{textAlign:'center'}}>40 * 50 px</Text>
         </Pressable>
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <Text style={{fontSize:15,color:'#000000',marginLeft:10,marginTop:7,fontWeight:'bold'}}>Chất liệu</Text>

         <Pressable style={{marginTop:8,marginRight:20,borderWidth:1,width:200}}>
            <Text style={{textAlign:'center'}}>Giấy bóng</Text>
         </Pressable>
      </View>
      <Text style={{color:'#D8D123',fontSize:25,fontWeight:'bold',marginLeft:250,marginTop:20}}>200.000 vnđ</Text>
      <Pressable style={{borderWidth:1,width:143,height:36,marginLeft:245,backgroundColor:'#FCB0B5',marginTop:10}}>
         <Text style={{textAlign:'center',marginTop:5,fontWeight:'bold',color:'#FFFFFF'}}>Đặt hàng</Text>
      </Pressable>

      <View style={{backgroundColor:'#e7e7e7',width:271,height:176,marginLeft:70,marginTop:60}}>
         <Image style={{width:80,height:71.25,marginLeft:100,marginTop:50}} source={require('./img/add-image.png')}/>
      </View>

      <Text style={{fontSize:15,fontWeight:'bold',marginLeft:90,marginTop:20}}>Đăng ký liền tay-Nhận ngay ưu đãi</Text>

      <View>
      <TextInput style={{width:270,height:46,borderWidth:1,marginTop:30,marginLeft:70}} placeholder='Họ Tên'/>
      <TextInput style={{width:270,height:46,borderWidth:1,marginTop:30,marginLeft:70}} placeholder='Số điện thoại'/>
      <TextInput style={{width:270,height:96,borderWidth:1,marginTop:30,marginLeft:70}} placeholder='Thông tin liên hệ'/>

      <Pressable style={{backgroundColor:'#FCB0B5',width:270,height:55,marginTop:30,marginLeft:70,marginBottom:50}}>
         <Text style={{fontSize:25,textAlign:'center',marginTop:15,color:'#FFFFFF'}}>Đăng ký</Text>
      </Pressable>
      </View>
    </View>
    </ScrollView>
  )
}

export default San_pham

const styles = StyleSheet.create({})