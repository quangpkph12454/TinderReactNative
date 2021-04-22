import React ,{useEffect,useState} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity, TextInput} from 'react-native';
import {Button} from "react-native-web";


export  default function Sua({route, navigation}){

    const {id} =route.params;
    const {username} = route.params;
    const {emaill}=route.params;
    const {sdt} =route.params;


    const [nameUD, setNameUD] = React.useState(username)
    const [emailUD, setEmailUD] = React.useState(emaill)
    const [sdtUD, setSdtUD] = React.useState(sdt)


    const updateData = ()=>{
        console.log(route.params._id)
        fetch("http://172.20.10.12:3001/update12", {
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                id : id,
                userName:nameUD,
                password:'as',
                email:emailUD,
                sdt:sdtUD,
            })
        }).then(res => res.json())
            .then(data =>{
                alert('Thanh cong')
                navigation.navigate("ListUser")
            }).catch(err =>{
            console.log("error",err)
        })
    }


    return(
        <View>

            <View style={styles.logo }>
                {/*<Image style={{margin:30,height:50,width:50}}  source={require('assert/favicon.png')} />*/}

                <Text>Tinder</Text>
            </View>
            <View style={styles.bodyApp}>
                <TextInput
                    style={styles.input}
                    onChangeText={setNameUD}
                    value={nameUD}
                    placeholder="Nhập userName"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={setEmailUD}
                    value={emailUD}
                    placeholder="Nhập Email"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={setSdtUD}
                    value={sdtUD}
                    placeholder="Nhập SĐT"
                />

                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => updateData()}
                    >
                        <Text>Lưu</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    logo:{
        marginTop:20,
        marginBottom:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    bodyApp:{
        marginTop: 80
    }
});
