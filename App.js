import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from "./abcxyz/List";
import Sua from "./abcxyz/Sua";
import Them from "./abcxyz/Them";
import Xoa from "./abcxyz/Xoa";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initalRouteName="List">
          <Stack.Screen name="List" options={{title: "Danh Sách Users"}} component={List}/>
          <Stack.Screen name="Sua" options={{title: "Sửa"}} component={Sua}/>
          <Stack.Screen name="Them" options={{title: "Thêm"}} component={Them}/>
          <Stack.Screen name="Xoa" options={{title: "Xoá"}} component={Xoa}/>
        </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
