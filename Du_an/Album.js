import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';

const images = [
  'https://th.bing.com/th/id/R.db190cef97acf1745ef1f69addc79ce9?rik=Sy2ZHb2M%2bhEOqQ&pid=ImgRaw&r=0',
  'https://tuarts.net/wp-content/uploads/2022/02/270768107_365614488729429_8895949271369141987_n.jpg',
  'https://tuarts.net/wp-content/uploads/2018/03/chup-anh-cuoi-dep-5-2.jpg',
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Album = () => {
  const [imgAtic, setImgAtic] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgAtic((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Chuyển ảnh sau mỗi 5 giây

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setImgAtic((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Chuyển ảnh sau mỗi 5 giây

    return () => clearTimeout(timeout);
  }, [imgAtic]);

  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
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
        <Text style={{fontSize:20, fontWeight:'bold', color:'#FCB0B5',marginTop:20,marginLeft:20}}>Video</Text>

        <View>
         <Image style={{width:350,height:200,marginTop:20,marginLeft:30}} source={require('./img/album1.png')}/>
         <Text style={{fontSize:20,marginLeft:60,marginTop:10,color:'#F9B1B9'}}>Video chụp ảnh cưới của gia đình</Text>
         <Text style={{marginLeft:300,marginTop:20}}>Xem chi tiết...</Text>
        </View>

        <View>
         <Image style={{width:350,height:200,marginTop:20,marginLeft:30}} source={require('./img/album2.png')}/>
         <Text style={{fontSize:20,marginLeft:60,marginTop:10,color:'#F9B1B9'}}>Video chụp ảnh cưới của gia đình</Text>
         <Text style={{marginLeft:300,marginTop:20}}>Xem chi tiết...</Text>
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

export default Album;
