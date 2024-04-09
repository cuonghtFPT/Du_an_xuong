import React, { useRef, useEffect, useState } from 'react';
import {
  DrawerLayoutAndroid,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import COMMON from '../COMMON';

const Home = (props) => {
  const drawer = useRef(null);
  const navigation = useNavigation();
  const [homeData, setHomeData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // const { navigation } = props;
  const man1=()=>{
    navigation.navigate('Chitiet_dichvu');
  }
  const man2=()=>{
    navigation.navigate('Home');
  }
  const man3=()=>{
    navigation.navigate('Album');
  }
  const man4=()=>{
    navigation.navigate('Chitiet_dichvu');
  }

  const man5=()=>{
    navigation.navigate('libary');
  }

  const man6=()=>{
    navigation.navigate('San_pham');
  }
  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    try {
      const response = await axios.get('http://10.24.30.234:3000/home/get-list-Homes');
      setHomeData(response.data);
    } catch (error) {
      console.error('Error fetching home data:', error);
    }
  };

  const openDrawer = () => {
    drawer.current?.openDrawer();
  };

  const closeDrawer = () => {
    drawer.current?.closeDrawer();
  };

  // Function to filter homeData based on searchTerm
  const filteredHomeData = homeData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={() => (
        <ScrollView style={{backgroundColor:'#f3d9dc',flex:1}}>
          {/* Navigation content */}
          <View>
            <Pressable onPress={man2}>
              <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',marginTop:10,color:'white'}}>Home</Text>
            </Pressable>
            <View style={{ height: 1, width: '100%', backgroundColor: 'white', marginTop: 15 }}>
        </View>
            <Pressable onPress={man3}>
              <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',marginTop:10,color:'white'}}>Album</Text>
            </Pressable>
            <View style={{ height: 1, width: '100%', backgroundColor: 'white', marginTop: 15 }}>
        </View>
            <Pressable onPress={man1}>
              <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',marginTop:10,color:'white'}}>Chi tiết dịch vụ</Text>
            </Pressable>
            <View style={{ height: 1, width: '100%', backgroundColor: 'white', marginTop: 15 }}>
        </View>

            <Pressable onPress={man5}>
              <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',marginTop:10,color:'white'}}>Libary</Text>
            </Pressable>
            <View style={{ height: 1, width: '100%', backgroundColor: 'white', marginTop: 15 }}>
        </View>

            <Pressable onPress={man6}>
              <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',marginTop:10,color:'white'}}>Sản phẩm</Text>
            </Pressable>
            <View style={{ height: 1, width: '100%', backgroundColor: 'white', marginTop: 15 }}>
        </View>
          </View>
        </ScrollView>
      )}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={openDrawer}>
            <Image style={styles.img} source={require('./img/menu.png')} />
          </TouchableOpacity>
          <Image style={styles.img1} source={require('./img/man.png')} />
        </View>

        <View>
          {/* TextInput for search */}
          <TextInput 
            placeholder='Search......' 
            style={styles.textInput} 
            onChangeText={text => setSearchTerm(text)} // Update searchTerm when text changes
          />
        </View>

        <Text style={{ fontSize: 25, marginTop: 10 }}>Phong cảnh</Text>

        <FlatList
          horizontal
          data={filteredHomeData} // Use filteredHomeData instead of homeData
          keyExtractor={(item, index) => index.toString()} // Use index as key if id is undefined
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Image source={{ uri: item.img }} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
            </View>
          )}
        />
        <View style={{ height: 1, width: '100%', backgroundColor: 'black', marginTop: 15 }}>
        </View>

        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Pressable style={{ width: 70, height: 26, borderWidth: 1, backgroundColor: '#F9B1B9' }}>
            <Text style={{ textAlign: 'center', lineHeight: 26, fontWeight: 'bold' }}>Tất cả</Text>
          </Pressable>

          <Pressable style={{ width: 70, height: 26, borderWidth: 1 }}>
            <Text style={{ textAlign: 'center', lineHeight: 26, fontWeight: 'bold' }}>Giá cưới </Text>
          </Pressable>

          <Pressable style={{ width: 70, height: 26, borderWidth: 1 }}>
            <Text style={{ textAlign: 'center', lineHeight: 26, fontWeight: 'bold' }}>Váy cưới</Text>
          </Pressable>

          <Pressable style={{ width: 70, height: 26, borderWidth: 1 }}>
            <Text style={{ textAlign: 'center', lineHeight: 26, fontWeight: 'bold' }}>Tư vấn</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView>
        <FlatList
          data={filteredHomeData} // Use filteredHomeData instead of homeData
          keyExtractor={(item, index) => index.toString()} // Use index as key if id is undefined
          renderItem={({ item }) => (
            <View style={styles.productItem1}>
              <Image source={{ uri: item.img }} style={styles.productImage1} />
              <Text style={styles.productName}>{item.name}</Text>
            </View>
          )}
        />
      </ScrollView>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingLeft: 12,
    paddingRight: 12,
    marginTop: 5,
  },
  textInput: {
    height: 45,
    width: 380,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 4,
    marginLeft: 5,
    marginRight: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  img: {
    width: 25,
    height: 25,
    marginRight: 329
  },
  img1: {
    width: 30,
    height: 30,
  },
  productItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  productItem1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  productImage: {
    width: 250,
    height: 150,
    borderRadius: 10,
    marginTop: 10
  },
  productImage1: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 30
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    width: 200,
    textAlign: 'center'
  },
});

export default Home;
