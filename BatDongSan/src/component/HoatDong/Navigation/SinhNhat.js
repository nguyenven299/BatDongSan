import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import FontAwesome from "react-native-vector-icons/FontAwesome"

const Stack = createStackNavigator();
import {
    View,
    Text,
    FlatList
} from 'react-native';
const DATA = [
    {
        id: 1,
        Name: "Vẹn ",
        Address: "quận 7",
        Age: "21 Tuổi"

    },
    {
        id: 2,
        Name: "Vẹn ",
        Address: "quận 7",
        Age: "21 Tuổi"

    },
    {
        id: 3,
        Name: "Vẹn ",
        Address: "quận 7",
        Age: "21 Tuổi"
    },
    {
        id: 4,
        Name: "Vẹn ",
        Address: "quận 7",
        Age: "21 Tuổi"
    },
    {
        id: 5,
        Name: "Vẹn ",
        Address: "quận 7",
        Age: "21 Tuổi"
    },
    {
        id: 6,
        Name: "Vẹn ",
        Address: "quận 7",
        Age: "21 Tuổi"
    },
    {
        id: 7,
        Name: "Vẹn ",
        Address: "quận 7",
        Age: "21 Tuổi"
    },
    {
        id: 8,
        Name: "Vẹn ",
        Address: "quận 7",
        Age: "21 Tuổi"
    },
    {
        id: 9,
        Name: "Vẹn ",
        Address: "quận 7",
        Age: "21 Tuổi"
    },
    {
        id: 10,
        Name: "Vẹn ",
        Address: "quận 7",
        Age: "21 Tuổi"
    }
];
const Item = ({ Name, Address, Age }) => (
    <View
        style=
        {{
            backgroundColor: 'yellow',
            paddingTop: 15,
            paddingLeft: 20,
            paddingBottom: 15,
            marginVertical: 5,
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
        <Text
            style=
            {{
                fontSize: 17,
                position: 'absolute',
                right: 20,
                top: 20
            }}
        >
            {Age}
        </Text>
    </View>
);

const SinhNhat = ({ type }) => {
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
export default SinhNhat;