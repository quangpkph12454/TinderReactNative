import React ,{useEffect,useState} from 'react';
import { Text,TextInput, View,StyleSheet ,Image,FlatList,TouchableOpacity} from 'react-native';
export  default function Xoa({route, navigation}){
    const {id} =route.params;
    fetch("https://tinder-mongodb.herokuapp.com/delete11", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id:id,
        }),
    })
        .then((response) => response.json())
        .then((delUser) => {
            navigation.navigate("ListUser")
        })
        .catch((error) => {
            console.error("đã xoa thành công");
        });

    return(
        <View></View>
    )

}
