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
import ActionHome from './ActionHome.js';
const MyWork = () => {
    return (
        <View
            style=
            {{
                flex: 1
            }}
        >

            <View
                style=
                {{
                    backgroundColor: 'white',
                    flex: 1,

                }}
            >
                <CalendarPicker
                    startFromMonday='true'
                    todayBackgroundColor='#FFA400'
                    allowRangeSelection={true}
                    nextTitle=">"
                    previousTitle="<"

                    textStyle=
                    {{
                    }}

                >
                </CalendarPicker>
                <View
                    style=
                    {{
                        marginTop: 15
                        // flex: 1
                    }}
                >
                </View>
            </View>
            <View>

            </View>
            <View
                style=
                {{
                    flex: 1,
                    flexDirection: 'column'
                }}
            >
                <View
                    style=
                    {{
                        flexDirection: 'row',
                        flex: 1,
                        alignContent: 'center',
                        justifyContent: 'space-between',
                        marginTop: 10,
                        backgroundColor: 'white'
                    }}
                >
                    <TouchableOpacity
                        style=
                        {{
                            flex: 1,
                            backgroundColor: 'red'
                        }}
                    >
                        <Text
                            style=
                            {{
                                textAlign: 'center',
                                paddingVertical: 5,
                                fontSize: 20

                            }}
                        >Hoạt động</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style=
                        {{
                            flex: 1,
                            backgroundColor: 'yellow'
                        }}
                    >
                        <Text
                            style=
                            {{
                                textAlign: 'center',
                                paddingVertical: 5,
                                fontSize: 20

                            }}
                        >Sinh nhật</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style=
                    {{
                        flex: 6,
                        backgroundColor: 'blue'
                    }}
                >
                    <ActionHome></ActionHome>

                </View>
            </View>

        </View>
    )
}
export default MyWork;