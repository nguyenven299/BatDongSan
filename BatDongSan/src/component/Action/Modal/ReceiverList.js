import * as React from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

const Stack = createStackNavigator();
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    StyleSheet,
    StatusBar
} from 'react-native';
const DATA = [
    {
        id: 1,
        Name: "Trần Nguyên Vẹn ",
        Address: "806, khu phố 3, phường Tân Phú, Đường Huỳnh Tấn Phát, quận 7",

    },
    {
        id: 2,
        Name: "Trần Nguyên Vẹn ",
        Address: "806, khu phố 3, phường Tân Phú, Đường Huỳnh Tấn Phát, quận 7",

    },
    {
        id: 3,
        Name: "Trần Nguyên Vẹn ",
        Address: "806, khu phố 3, phường Tân Phú, Đường Huỳnh Tấn Phát, quận 7",
    },
    {
        id: 4,
        Name: "Trần Nguyên Vẹn ",
        Address: "806, khu phố 3, phường Tân Phú, Đường Huỳnh Tấn Phát, quận 7",
    },
    {
        id: 5,
        Name: "Trần Nguyên Vẹn ",
        Address: "806, khu phố 3, phường Tân Phú, Đường Huỳnh Tấn Phát, quận 7",
    },
    {
        id: 6,
        Name: "Trần Nguyên Vẹn ",
        Address: "806, khu phố 3, phường Tân Phú, Đường Huỳnh Tấn Phát, quận 7",
    },
    {
        id: 7,
        Name: "Trần Nguyên Vẹn ",
        Address: "806, khu phố 3, phường Tân Phú, Đường Huỳnh Tấn Phát, quận 7",
    },
    {
        id: 8,
        Name: "Trần Nguyên Vẹn ",
        Address: "806, khu phố 3, phường Tân Phú, Đường Huỳnh Tấn Phát, quận 7",
    },
    {
        id: 9,
        Name: "Trần Nguyên Vẹn ",
        Address: "806, khu phố 3, phường Tân Phú, Đường Huỳnh Tấn Phát, quận 7",
    },
    {
        id: 10,
        Name: "Trần Nguyên Vẹn ",
        Address: "806, khu phố 3, phường Tân Phú, Đường Huỳnh Tấn Phát, quận 7",
    }
];
const Item = ({ Name, Address }) => (
    <View
        style=
        {{
            backgroundColor: 'white',
            paddingTop: 15,
            paddingLeft: 20,
            paddingBottom: 15,
            marginVertical: 5,
            alignItems: 'center',
            borderBottomWidth: 0.5
        }}
    >
        <Text
            style=
            {{
                fontSize: 15,
            }}
        >
            {Name}
        </Text>
        <Text
            style=
            {{
                fontSize: 12,
                color: '#A09EA0'
            }}
        >
            {Address}
        </Text>

    </View>
);

const ReceiverList = () => {
    const renderItem = ({ item }) => (
        <Item
            Name={item.Name}
            Address={item.Address}
            Age={item.Age}
        />

    );

    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>

    );
};
export default ReceiverList;