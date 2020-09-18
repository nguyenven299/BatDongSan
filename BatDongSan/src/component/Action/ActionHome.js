import React from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Action from './Navigation/Action.js'
import BirthDate from './Navigation/BirthDate'
import {
    ImageBackground,
    View,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
const ActionHome = () => {
    return (
        <View
            style=
            {{
                flexDirection: 'row'
            }}
        >
            <Action></Action>
        </View>
    )
}
export default ActionHome;