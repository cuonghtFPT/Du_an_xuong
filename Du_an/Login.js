import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import axios from 'axios';

const Login = (props) => {
    const { navigation } = props;
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const chuyenman = () => {
        navigation.navigate('Register');
    };

    const isEmailValid = (email) => {
        // Biểu thức chính quy để kiểm tra email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const onSubmit = () => {
        // Kiểm tra email và pass có đúng định dạng
        if (!isEmailValid(user)) {
            Alert.alert('Error', 'Please enter a valid email');
            return;
        }

        if (!/^\d+$/.test(pass)) {
            Alert.alert('Error', 'Password must contain only digits');
            return;
        }

        // Kiểm tra nhập trống
        if (!user || !pass) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        // Gửi yêu cầu đăng nhập
        let formData = {
            user: user,
            pass: pass,
        };

        axios.post('http://10.24.30.234/register/add-login', formData)
            .then((response) => {
                console.log(response);
                Alert.alert('Success', 'Login successful');
                navigation.navigate('Home');
                // Thực hiện hành động sau khi đăng nhập thành công
            })
            .catch((error) => {
                console.log(error);
                Alert.alert('Error', 'Failed to login');
            });
    };

    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ backgroundColor: '#FCF0F0', borderBottomLeftRadius: 80, borderBottomRightRadius: 80, width: 200, height: 115 }}></View>
                <View style={{ backgroundColor: '#FCF0F0', borderBottomLeftRadius: 130, borderBottomRightRadius: 100, width: 240, height: 165 }}></View>
            </View>

            <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>Welcom</Text>
            <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', color: '#FCB0B5' }}>TOC STUSIO</Text>

            <View style={{ width: 308, height: 270, backgroundColor: '#FCF0F0', marginLeft: 55, marginTop: 30, borderBottomLeftRadius: 50, borderTopLeftRadius: 50, borderBottomRightRadius: 50, borderTopRightRadius: 50 }}>
                <TextInput placeholder='Enter your user' style={{ backgroundColor: 'white', height: 45, width: 225, marginLeft: 40, marginTop: 45 }} onChangeText={(value) => setUser(value)} />
                <TextInput placeholder='Enter your pass' style={{ backgroundColor: 'white', height: 45, width: 225, marginLeft: 40, marginTop: 25 }} onChangeText={(value) => setPass(value)} secureTextEntry={true} />
                <Text style={{ textAlign: 'right', fontWeight: 'bold', marginTop: 20, marginRight: 15 }}>Forgot Password?</Text>
                <Pressable onPress={onSubmit} style={{ backgroundColor: '#FCB0B5', width: 225, height: 41, marginLeft: 40, marginTop: 20, borderRadius: 10 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>Login</Text>
                </Pressable>
            </View>
            <Text style={{ textAlign: 'center', marginTop: 40, fontSize: 20, fontWeight: 'bold' }}>---- Or Login Width ----</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
                <View style={{ borderWidth: 1, width: 65, height: 42 }}>
                    <Image style={{ width: 30, height: 30, marginLeft: 15, marginTop: 5 }} source={require('./img/facebook.png')} />
                </View>
                <View style={{ borderWidth: 1, width: 65, height: 42 }}>
                    <Image style={{ width: 30, height: 30, marginLeft: 15, marginTop: 5 }} source={require('./img/search.png')} />
                </View>
                <View style={{ borderWidth: 1, width: 65, height: 42 }}>
                    <Image style={{ width: 30, height: 30, marginLeft: 15, marginTop: 5 }} source={require('./img/apple.png')} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 40, marginLeft: 90 }}>
                <Text style={{ fontWeight: 'bold' }}>Don’t have an accout?</Text>
                <Pressable onPress={chuyenman}>
                    <Text style={{ fontSize: 15, marginLeft: 5, fontWeight: 'bold', color: '#FCB0B5' }}>Regiter now</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({})
