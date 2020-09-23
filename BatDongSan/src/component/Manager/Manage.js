import React from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import ScrollComponent from '../../common/ScrollComponent'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
const Manage = ({ navigation }) => {
    return (
        <View
            style=
            {{
                backgroundColor: 'white',
                flex: 1
            }}
        >
            <ScrollView>
                <ScrollComponent textName="Bán hàng" navigation={navigation} />
                <ScrollComponent textName="Góp vốn" navigation={navigation} />
                <ScrollComponent textName="Môi giới" navigation={navigation} />
                <ScrollComponent textName="Hợp đồng" />
                <ScrollComponent textName="Tiện ích" />
            </ScrollView>
        </View>
    )
}
export default Manage;