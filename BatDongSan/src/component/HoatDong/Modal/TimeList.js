import * as React from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import FontAwesome from "react-native-vector-icons/FontAwesome"

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
        Time: "1 phút"

    },
    {
        id: 2,
        Time: "15 phút"

    },
    {
        id: 3,
        Time: "30 phút"
    },
    {
        id: 4,
        Time: "45 phút"
    },
    {
        id: 5,
        Time: "1 giờ"
    },
    {
        id: 6,
        Time: "1,5 giờ"
    },
    {
        id: 7,
        Time: "2 giờ"
    },
    {
        id: 8,
        Time: "2,5 giờ"
    },
    {
        id: 9,
        Time: "3 giờ"
    },
    {
        id: 10,
        Time: "4 giờ"
    },
    {
        id: 11,
        Time: "4,5 giờ"
    },
    {
        id: 12,
        Time: "5 giờ"
    },
    {
        id: 13,
        Time: "5,6 giờ"
    },
    {
        id: 14,
        Time: "6 giờ"
    },
    {
        id: 15,
        Time: "6,5 giờ"
    },
    {
        id: 16,
        Time: "7 giờ"
    },
    {
        id: 17,
        Time: "7,5 giờ"
    },
    {
        id: 18,
        Time: "8 giờ"
    }
];
const Item = ({ Time }) => (
    <View
        style=
        {{
            backgroundColor: 'white',
            paddingTop: 15,
            paddingLeft: 20,
            paddingBottom: 15,
            marginVertical: 5,
            borderWidth: 0.5,
            borderRadius: 5,
            padding: 10
        }}
    >
        <FontAwesome
            name='check' size={20} color="#DEDDDE"
            style=
            {{
                position: 'absolute',
                padding: 15
            }}
        />
        <Text
            style=
            {{
                fontSize: 15,
                paddingLeft: 30
            }}
        >
            {Time}
        </Text>


    </View >
);

const TimeList = () => {
    const renderItem = ({ item }) => (
        <Item
            Time={item.Time}

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
export default TimeList;