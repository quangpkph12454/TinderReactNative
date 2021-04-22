import React ,{useEffect,useState} from 'react';
import { Text, View,StyleSheet ,FlatList,TouchableOpacity} from 'react-native';
export  default function List({route, navigation}){
    const  link='http://172.20.10.12:3001/getUsers'
    useEffect(() => {
        fetch(link)
            .then((response) => response.json())
            .then((baseJson) => {
                if(baseJson.errorCode == 200){
                    setData(baseJson.data)
                }else{
                    alert(baseJson.errorMessage)
                }
            })
            .catch((error) => {
                console.error(error);
            });

    }, [])
    const [data, setData] = useState([])
    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={()=>
                navigation.navigate('Them',{
                })

            }><Text>Add</Text></TouchableOpacity>

            <FlatList style={styles.fla}
                      data={data}
                      renderItem={({ item }) =>
                          <View style={styles.item}>

                              <Text><Text style={{fontSize:16}}>UserName:</Text>{item.userName}</Text>
                              <Text><Text style={{fontSize:16}}>Email:</Text>{item.email}</Text>
                              <Text><Text style={{fontSize:16}}>SĐT:</Text>{item.sdt}</Text>

                              <View style={styles.itemButtonRow}>
                                  <TouchableOpacity style={styles.button}

                                                    onPress={() =>// sự kiện click
                                                        // chuyển trang khi click

                                                        navigation.navigate('Sua',{

                                                            // // truyền dữ liệu qua màn hình "ChiTiet" tên biến bên App
                                                            id:item._id,
                                                            username:item.userName,

                                                            emaill:item.email,
                                                            sdt:item.sdt,
                                                        })

                                                    }
                                  >
                                      <Text>Sửa</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity style={styles.button}

                                                    onPress={() => navigation.navigate('Xoa',{
                                                        // // truyền dữ liệu qua màn hình "ChiTiet" tên biến bên App
                                                        id:item._id,
                                                    })
                                                    }
                                  >
                                      <Text>Xóa</Text>
                                  </TouchableOpacity>
                              </View>
                          </View>}
                      keyExtractor={item => item._id}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    fla:{
        flex: 1,

    },
    item:{
        marginTop:100,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'red'
    },
    button:{
        marginTop:10,
        padding:10,
        alignItems: 'center',
        backgroundColor: '#C5FBF4',
    },
    itemButtonRow: {

        flexDirection: 'row',
    },
});
