import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import axios from 'axios';

const Register = (props) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const { navigation } = props;

    const isEmailValid = (email) => {
        // Biểu thức chính quy để kiểm tra email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const onSubmit = () => {
        // Kiểm tra email và pass có đúng định dạng
        if (!isEmailValid(user)) {
            alert('Please enter a valid email');
            return;
        }

        if (!/^\d+$/.test(pass)) {
            alert('Password must contain only digits');
            return;
        }

        // Kiểm tra nhập trống và mật khẩu xác nhận
        if (!user || !pass || !confirmPass) {
            alert('Please fill in all fields');
            return;
        }

        // Kiểm tra mật khẩu và mật khẩu xác nhận trùng khớp
        if (pass !== confirmPass) {
            alert('Password does not match confirm password');
            return;
        }

        // Gửi yêu cầu đăng ký
        let formData = {
            user: user,
            pass: pass,
        };

        axios.post('http://10.24.30.234/register/add-register', formData)
            .then((response) => {
                console.log(response);
                navigation.navigate('Login');
                // Thực hiện hành động sau khi đăng ký thành công, chẳng hạn chuyển hướng đến màn hình đăng nhập
            })
            .catch((error) => {
                console.log(error);
                alert('Failed to register');
            });
    };

    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ backgroundColor: '#FCF0F0', borderBottomLeftRadius: 80, borderBottomRightRadius: 80, width: 200, height: 115 }}></View>
                <View style={{ backgroundColor: '#FCF0F0', borderBottomLeftRadius: 130, borderBottomRightRadius: 100, width: 240, height: 165 }}></View>
            </View>

            <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>Register For</Text>
            <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', color: '#FCB0B5' }}>TOC STUDIO</Text>

            <View style={{ width: 308, height: 295, backgroundColor: '#FCF0F0', marginLeft: 55, marginTop: 10, borderBottomLeftRadius: 50, borderTopLeftRadius: 50, borderBottomRightRadius: 50, borderTopRightRadius: 50 }}>
                <TextInput placeholder='Enter your user' style={{ backgroundColor: 'white', height: 35, width: 225, marginLeft: 40, marginTop: 45 }} onChangeText={(value) => setUser(value)} />
                <TextInput placeholder='Enter your pass' style={{ backgroundColor: 'white', height: 35, width: 225, marginLeft: 40, marginTop: 25 }} onChangeText={(value) => setPass(value)} secureTextEntry={true} />
                <TextInput placeholder='Confirm your pass' style={{ backgroundColor: 'white', height: 35, width: 225, marginLeft: 40, marginTop: 25 }} onChangeText={(value) => setConfirmPass(value)} secureTextEntry={true} />
                <Pressable onPress={onSubmit} style={{ backgroundColor: '#FCB0B5', width: 225, height: 41, marginLeft: 40, marginTop: 20, borderRadius: 10 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>Register</Text>
                </Pressable>
            </View>
            <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 20, fontWeight: 'bold' }}>---- Or Login Width ----</Text>

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

            
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({})
