import * as React from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

const Stack = createStackNavigator();
import {
    View,
    Text,
    FlatList,
    Item
} from 'react-native';

const Action = () => {
    const data = [
        {
            id: 1,
            Name: "Vẹn ",
            Address: "quận 7",
        },
        {
            id: 2,
            Name: "Vẹn ",
            Address: "quận 7",

        },
        {
            id: 3,
            Name: "Vẹn ",
            Address: "quận 7",
        },
        {
            id: 4,
            Name: "Vẹn ",
            Address: "quận 7",
        },
        {
            id: 5,
            Name: "Vẹn ",
            Address: "quận 7",
        },
        {
            id: 6,
            Name: "Vẹn ",
            Address: "quận 7",
        },
        {
            id: 7,
            Name: "Vẹn ",
            Address: "quận 7",
        },
        {
            id: 8,
            Name: "Vẹn ",
            Address: "quận 7",
        },
        {
            id: 9,
            Name: "Vẹn ",
            Address: "quận 7",
        },
        {
            id: 10,
            Name: "Vẹn ",
            Address: "quận 7",
        }
    ];
    const renderItem = (item, index) =>
        (
            <Item item={item} index={index}></Item>
        )
    return (
        <View
            style=
            {{
                backgroundColor: 'yellow'
            }}
        >

            {/* <FlatList
                data={data}
                renderItem={(item, index) => renderItem(item, index)}
                keyExtractor={item => item.id}
            /> */}
            <Text>13</Text>
        </View>
    )
}
export default Action;