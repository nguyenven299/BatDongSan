import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import ModalComponent from '../../common/ModalComponent'
import MatBang from './MatBang'
import Nen from './Nen'
import PhatHanh from './PhatHanh'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
export const UserContext = React.createContext()

const BanHang = ({ navigation }) => {
    const [Model, setModel] = useState("Testing-DB-DCho-2209")
    const [modalVisible, setModalVisible] = useState(false);
    const [activity, setActivity] = useState(1);

    navigation.setOptions({
        headerRight: () => (
            <View
                style=
                {{
                    flexDirection: 'row',
                }}>
                <TouchableOpacity
                    onPress=
                    {
                        () => {
                            setActivity(1)
                        }
                    }
                    style={style.Touch}
                >
                    <FontAwesome
                        name="tasks" size={25} color='white'

                    ></FontAwesome>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress=
                    {
                        () => {
                            setActivity(2)
                        }
                    }
                    style={style.Touch}

                >
                    <FontAwesome
                        name="image" size={25} color='white'

                    ></FontAwesome>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress=
                    {
                        () => {
                            setActivity(3)
                        }
                    }
                    style={style.Touch}

                >

                    <FontAwesome
                        name="calendar" size={25} color='white'


                    ></FontAwesome>
                </TouchableOpacity>

            </View>

        ),
        headerTitle: () =>
            (
                <TouchableOpacity
                    style=
                    {{
                        width: 300,
                        height: 70,
                        flexDirection: 'row'
                    }}
                    onPress={
                        () => {
                            setModalVisible(true)

                        }}
                >
                    <ModalComponent
                        visible={modalVisible} setModalVisible1={setModalVisible} setModel={setModel} Mode={"BanHang"}
                    />
                    <FontAwesome name="caret-down" size={20} color="#9B999B"
                        style=
                        {{
                            marginLeft: 20,
                            marginTop: 25,
                            color: 'white'
                        }}
                    />
                    <Text
                        style=
                        {{
                            fontSize: 20,
                            margin: 20,
                            color: 'white'
                        }}
                    >
                        {Model}
                    </Text>

                </TouchableOpacity>
            )
    });
    return (
        <UserContext.Provider value={{ activity: activity, setActivity: setActivity }}>
            {
                activity == 1 ? (<Nen navigation={navigation} />) : (
                    activity == 2 ? (<MatBang navigation={navigation} />) : (
                        <PhatHanh navigation={navigation} />
                    )
                )
            }
        </UserContext.Provider>
    )
}
const style = StyleSheet.create({
    Touch:
    {
        margin: 10
    },

    textStyle:
    {
        color: "black",
        fontSize: 20,
        marginLeft: 15,
        marginTop: 20
    },
    textStyleClose:
    {
        color: "black",
        fontSize: 20,
        textAlign: "center"
    },
    buttonClose:
    {
        backgroundColor: "#F0EEF0",
        width: 350,
        padding: 10,
        marginTop: 20,
        elevation: 2,

    },
})
export default BanHang;