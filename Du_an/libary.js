import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const images = [
  'https://th.bing.com/th/id/R.db190cef97acf1745ef1f69addc79ce9?rik=Sy2ZHb2M%2bhEOqQ&pid=ImgRaw&r=0',
  'https://tuarts.net/wp-content/uploads/2022/02/270768107_365614488729429_8895949271369141987_n.jpg',
  'https://tuarts.net/wp-content/uploads/2018/03/chup-anh-cuoi-dep-5-2.jpg',
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const libary = () => {
  const [imgAtic, setImgAtic] = useState(0);
  const [libary, setlibary] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get('http://10.24.30.234:3000/service/get-list-Server');
        setlibary(response.data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgAtic((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setImgAtic((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [imgAtic]);

  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide !== imgAtic) {
        setImgAtic(slide);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bannerWrapper}>
        <ScrollView
          onScroll={({ nativeEvent }) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
          contentOffset={{ x: imgAtic * WIDTH, y: 0 }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              resizeMode='stretch'
              style={{ width: WIDTH, height: HEIGHT * 0.25 }}
              source={{ uri: image }}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((image, index) => (
            <Text key={index} style={imgAtic === index ? styles.dotActive : styles.dot}>
              ⬤
            </Text>
          ))}
        </View>
      </View>
      <ScrollView>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FCB0B5', marginTop: 20, marginLeft: 20 }}>Dịch vụ</Text>

          <View style={{ marginTop: 20, flexDirection: 'row' }}>
            {libary.map((item, index) => (
              <View key={index} style={{ borderWidth: 1, width: 180, marginLeft: 15, height: 200, borderRadius: 25 }}>
                <Image style={{ width: 180, height: 110, borderTopLeftRadius: 25, borderTopRightRadius: 25 }} source={{ uri: item.img }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                  <Text style={{ color: '#FCB0B5', fontWeight: 'bold', marginLeft: 5 }}>Mã số: {item.maso} </Text>
                  <Image style={{ width: 20, height: 20, marginRight: 5 }} source={require('./img/heart_1.png')} />
                </View>

                <Text style={{ fontWeight: 'bold', marginLeft: 5, marginTop: 10 }}>Giá bán: {item.giaban}</Text>
                <Text style={{ fontWeight: 'bold', marginLeft: 5, marginTop: 5 }}>Giá thuê: {item.giathue}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
 }
 const styles = StyleSheet.create({
 container: {
  flex: 1
},
bannerWrapper: {
 position: 'relative',
  },
 wrap: {
 width: WIDTH,
 height: HEIGHT * 0.25
 },
 wrapDot: {
 position: "absolute",
 bottom: 0,
flexDirection: "row",
 alignSelf: "center",
 zIndex: 1, // Đặt vị trí z-index ở đây
},
 dotActive: {
margin: 3,
color: "black"
},
dot: {
margin: 3,
 color: "#fff"
}
});


export default libary;