import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Information from '../More/Create/Infomation'
import Revenue from '../More/Create/Revenue'
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
const Deposit = ({ navigation }) => {
    const [Activity, setActivity] = useState()
    const [typeActivity, setTypeActivity] = useState(1)

    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity
                onPress={() => {

                }}
                style=
                {{
                    padding: 15
                }}
            >
                <FontAwesome
                    name="save" size={20} color='white'
                    style=
                    {{
                        marginRight: 10
                    }}
                ></FontAwesome>
            </TouchableOpacity>
        ),
        title: "Phiếu đặt cọc (72h)",
    });

    return (
        <View
            style=
            {{

                flexDirection: 'column'
            }}
        >

            <View
                style=
                {{
                    flexDirection: 'row',
                    // flex: 1,
                    height: 50,
                    alignContent: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'white',
                    // borderBottomColor: 'black',
                    // borderBottomWidth: 2,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,

                    elevation: 10,

                }}
            >
                <TouchableOpacity
                    style=
                    {{
                        flex: 1,
                        borderBottomWidth: 2,
                        borderBottomColor: typeActivity == 1 ? 'yellow' : 'white'
                    }}
                    onPress={
                        () => {
                            setActivity("Information")
                            setTypeActivity(1)

                        }}
                >
                    <Text
                        style=
                        {{
                            textAlign: 'center',
                            paddingVertical: 10,
                            fontSize: 15,
                            color: typeActivity == 1 ? '#FFA605' : 'black'


                        }}
                    >Thông tin chung</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style=
                    {{
                        flex: 1,
                        borderBottomWidth: 2,
                        borderBottomColor: typeActivity == 2 ? 'yellow' : 'white'
                    }}
                    onPress={
                        () => {
                            setActivity("Revenue")
                            setTypeActivity(2)

                        }}
                >
                    <Text
                        style=
                        {{
                            textAlign: 'center',
                            paddingVertical: 10,
                            fontSize: 15,
                            color: typeActivity == 2 ? '#FFA605' : 'black'


                        }}
                    >Doanh thu/Hoa hồng</Text>
                </TouchableOpacity>

            </View>
            <View
                style=
                {{

                }}
            >
                {
                    Activity == "Revenue" ? (
                        <Revenue></Revenue>) : (
                            <Information></Information>
                        )
                }
            </View>
        </View>
    )
}
export default Deposit;