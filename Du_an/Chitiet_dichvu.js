import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, FlatList, Pressable, TextInput } from 'react-native';
import axios from 'axios';

const ANH = [
    require('./img/anh_cuoi1.png'),
    require('./img/anh_cuoi1.png'),
    require('./img/anh_cuoi1.png'),
    require('./img/anh_cuoi1.png'),
];

const Chitiet_dichvu = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = () => {
        // Gửi yêu cầu đăng ký
        let formData = {
            name: name,
            phone: phone,
            message:message
        };

        axios.post('http://10.24.30.234/servicedetail/post-servicedatails', formData)
            .then((response) => {
                console.log(response);
                // Thực hiện hành động sau khi đăng ký thành công, chẳng hạn chuyển hướng đến màn hình đăng nhập
            })
            .catch((error) => {
                console.log(error);
                alert('Failed to error');
            });
    };
    return (
        <ScrollView>
            <ImageBackground source={require('./img/anh_cuoi5.jpg')} style={styles.imageBackground}>
                <View style={styles.overlay}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 20, marginLeft: 20, color: "black" }}>Mã số:AT092</Text>
                    <Text style={{ marginLeft: 20, fontSize: 19, color: "#fff" }}>váy cưới mới AT092 </Text>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <View style={{ flexDirection: "row", width: "50%" }}>
                            <Text style={{ marginLeft: 20 }}>Giá bán:</Text>
                            <Text style={{ color: "#fff" }}>2000000 VND</Text>
                        </View>
                        <View style={{ flexDirection: "row", width: "50%" }}>
                            <Text style={{ marginLeft: 20 }}>Giá thuê:</Text>
                            <Text style={{ color: "#fff" }}>2000000 VND</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <FlatList
                data={ANH}
                horizontal
                renderItem={({ item }) => (
                    <Image source={item} style={{ width: 100, height: 100, margin: 10 }} />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={{ position: 'relative' }}>
                <View style={{ width: 380, height: 300, backgroundColor: "#f3d9dc", marginTop: 15, borderRadius: 20, marginLeft: 20 }}>
                    <View style={{ marginTop: 50, marginLeft: 20 }}>
                        <Text style={{ color: "black" }}>Váy cưới AT092</Text>
                        <Text style={{ marginLeft: 30, color: "black" }}>. Áo nhập khẩu 100%</Text>
                        <Text style={{ marginLeft: 30, color: "black" }}>. Áo mới 100%</Text>
                        <Text style={{ marginLeft: 30, color: "black" }}>. Màu sắc : Trắng </Text>
                        <Text style={{ marginLeft: 30, color: "black" }}>. Kiểu áo : tùng xòe</Text>
                        <Text style={{ marginLeft: 30, color: "black" }}>. Kích cỡ : free size </Text>
                        <Text style={{ marginLeft: 30, color: "black" }}>. Chất liệu : voan </Text>
                        <Text style={{ marginLeft: 30, color: "black" }}>. Kiểu ống tay : tay dài </Text>
                        <Text style={{ marginLeft: 30, color: "black" }}>. phong cách : thắt dây </Text>
                        <Text style={{ marginLeft: 30, color: "black" }}>. Kiểu dáng: Thanh lịch, sang trọng, lịch lãm, quyến rũ, cuốn hút </Text>
                    </View>
                </View>
                <View style={{ position: 'absolute', top: 0, left: 0 }}>
                    <View style={{ width: 130, height: 50, backgroundColor: "#ed008c", borderRadius: 10, marginLeft: 70, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>Mô tả sản phẩm</Text>
                    </View>
                </View>
            </View>
            <Pressable
                style={{ width: 300, height: 40, backgroundColor: "#f3d9dc", marginLeft: 50, marginTop: 20, borderRadius: 20 }}
            >
                <Text style={{ textAlign: "center", lineHeight: 40, fontWeight: "bold", color: "#fff" }}>LIÊN HỆ</Text>
            </Pressable>
            <Text style={{ fontSize: 22, color: "black", fontWeight: "bold", fontStyle: 'italic', textAlign: "center", marginTop: 20 }}>Đăng ký liền tay - nhận ngay ưu đãi</Text>
            <Text style={{ marginLeft: 20 }}>Họ Và Tên </Text>
            <TextInput
                style={{ backgroundColor: 'rgba(128, 128, 128, 0.1)', width: 380, marginLeft: 20 }}
                onChangeText={(value)=>setName(value)}
            />
            <Text style={{ marginLeft: 20 }}>Số điện thoại  </Text>
            <TextInput
                style={{ backgroundColor: 'rgba(128, 128, 128, 0.1)', width: 380, marginLeft: 20 }}
                onChangeText={(value)=>setPhone(value)}
            />
            <Text style={{ marginLeft: 20 }}>Thông tin đăng ký   </Text>
            <TextInput
                style={{ width: 380, marginLeft: 20, height: 100, backgroundColor: 'rgba(128, 128, 128, 0.1)' }}
               onChangeText={(value)=>setMessage(value)}
            />
            <Pressable
                style={{ width: 380, marginLeft: 20, height: 40, backgroundColor: "#f3d9dc", marginTop: 20, marginBottom: 20 }}
                onPress={onSubmit}
            >
                <Text style={{ textAlign: "center", lineHeight: 40, fontWeight: "bold", color: "#fff" }}>Đăng ký</Text>
            </Pressable>
        </ScrollView>
    );
};

export default Chitiet_dichvu;

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: 350,
    },
    overlay: {
        width: '100%',
        height: 150,
        backgroundColor: 'rgba(128, 128, 128, 0.7)',
        marginTop: 200,
        borderTopLeftRadius: 20, // Bo tròn góc bên trái phía trên
        borderTopRightRadius: 20, // Bo tròn góc bên phải phía trên
    },
});
