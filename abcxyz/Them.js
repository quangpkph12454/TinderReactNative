import React ,{useEffect,useState} from 'react';
import { Text,TextInput, View,StyleSheet ,Image,FlatList,TouchableOpacity} from 'react-native';
export  default function Them({route, navigation}){



    const [name, setName] = React.useState()
    const [email, setEmail] = React.useState()
    const [sdt, setSdt] = React.useState()
    const [pass, setPass] = React.useState()

    const _submitData = () =>{
        fetch("http://172.20.10.12:3001/users", {
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                userName:name,
                email:email,
                password:pass,
                sdt:sdt,

            })
        }).then(res => res.json())
            .then(data =>{
                alert('Them thanh cong')
                navigation.navigate("ListUser")
            }).catch(err =>{
            console.log("error",err)
        })}

    return(
        <View>
            <View style={styles.logo }>
                {/*<Image style={{margin:30,height:50,width:50}}  source={require('assert/favicon.png')} />*/}

                <Text>Tinder</Text>
            </View>
            <View style={styles.bodyApp}>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="Nhập userName"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Nhập Email"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={setPass}
                    value={pass}
                    placeholder="Nhập Password"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setSdt}
                    value={sdt}
                    placeholder="Nhập SĐT"
                />
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => _submitData()}>
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
