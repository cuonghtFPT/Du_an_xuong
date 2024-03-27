import React, { useRef } from 'react';
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
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const drawer = useRef(null);
  const navigation = useNavigation();

  const openDrawer = () => {
    drawer.current?.openDrawer();
  };

  const closeDrawer = () => {
    drawer.current?.closeDrawer();
  };

  const navigateToHomeScreen = () => {
    navigation.navigate('them_sp');
    closeDrawer(); // Close the drawer after navigating
  };

  const navigateToHomeScreen1 = () => {
    navigation.navigate('thong_tin');
    closeDrawer(); // Close the drawer after navigating
  };

  const productData = [
    { id: '1', img: require('./img/anh_cuoi3.jpg'), name: 'Phong cảnh cưới phù tuyệt đẹp cho bức ảnh', img1: require('./img/man.png'), content: 'TOC STUDIO', date: 'Jan 3,2023 * 3344 view' },
    { id: '2', img: require('./img/anh_cuoi3.jpg'), name: 'Phong cảnh cưới phù tuyệt đẹp cho bức ảnh', img1: require('./img/man.png'), content: 'TOC STUDIO', date: 'Jan 3,2023 * 3344 view' },
    { id: '3', img: require('./img/anh_cuoi3.jpg'), name: 'Phong cảnh cưới phù tuyệt đẹp cho bức ảnh', img1: require('./img/man.png'), content: 'TOC STUDIO', date: 'Jan 3,2023 * 3344 view' },
    { id: '4', img: require('./img/anh_cuoi3.jpg'), name: 'Phong cảnh cưới phù tuyệt đẹp cho bức ảnh', img1: require('./img/man.png'), content: 'TOC STUDIO', date: 'Jan 3,2023 * 3344 view' },

    // Add more data items as needed
  ];


  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={() => (
        <ScrollView>
          {/* Navigation content */}
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
          <TextInput placeholder='Search......' style={styles.textInput} />
        </View>

        <Text style={{ fontSize: 25, marginTop: 10 }}>Phong cảnh</Text>

        <FlatList
          horizontal
          data={productData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Image source={item.img} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <View style={{flexDirection:'row'}}>
                <Image style={{width:20,height:20,marginTop:2,marginRight:10}} source={item.img1}/>
              <Text style={styles.productContent}>{item.content}</Text>
              <Text style={styles.productContent1}>{item.date}</Text>
              </View>
            </View>
          )}
        />
        <View style={{height:1,width:'100%',backgroundColor:'black',marginTop:15}}>
        </View>

        <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
          <Pressable style={{width:70,height:26,borderWidth:1,backgroundColor:'#F9B1B9'}}>
            <Text style={{textAlign:'center',lineHeight:26,fontWeight:'bold'}}>Tất cả</Text>
          </Pressable>

          <Pressable style={{width:70,height:26,borderWidth:1}}>
            <Text style={{textAlign:'center',lineHeight:26,fontWeight:'bold'}}>Giá cưới </Text>
          </Pressable>

          <Pressable style={{width:70,height:26,borderWidth:1}}>
            <Text style={{textAlign:'center',lineHeight:26,fontWeight:'bold'}}>Váy cưới</Text>
          </Pressable>

          <Pressable style={{width:70,height:26,borderWidth:1}}>
            <Text style={{textAlign:'center',lineHeight:26,fontWeight:'bold'}}>Tư vấn</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView>
      <FlatList
          data={productData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productItem1}>
              <Image source={item.img} style={styles.productImage1} />
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
    borderRadius:20,
    paddingLeft:10,
    paddingRight:10
  },
  productItem1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderRadius:20,
    paddingLeft:10,
    paddingRight:10
  },
  productImage: {
    width: 250,
    height: 150,
    borderRadius: 10,
    marginTop:10
  },
  productImage1: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop:10,
    marginBottom:10,
    marginRight:30
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    width:200,
    textAlign:'center'
  },
  productContent: {
    fontSize: 12,
    marginTop: 5,
  },
  productContent1: {
    fontSize: 12,
    marginTop: 5,
    marginLeft:20
  },
});

export default Home;
