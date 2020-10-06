import React, { useState } from 'react'
import StyleCommon from './../theme/StyleCommon'
import {
    TextInput, View, Text
} from 'react-native';

const MultiLineTextInputComponent = ({ textName, visible, disable, required }) => {
    const [require, setRequire] = useState("")

    return (

        <View>
            {
                visible ?
                    (
                        !disable ? (
                            <View>
                                <Text
                                    style={StyleCommon.textTitleInputStyle}
                                >
                                    {textName}
                                </Text>
                                <TextInput
                                    style={StyleCommon.multiLineDisableInputStyle}
                                    editable={disable}
                                    onChangeText={text => setRequire(text)}
                                    value={require}
                                    multiline={true}
                                    underlineColorAndroid='transparent'
                                >
                                </TextInput>
                            </View>
                        ) : (
                                required ? (
                                    <View>
                                        <View
                                            style=
                                            {{
                                                flexDirection: 'row'
                                            }}
                                        >
                                            <Text
                                                style={StyleCommon.textTitleInputStyle}
                                            >
                                                {textName}
                                            </Text>
                                            <Text
                                                style={StyleCommon.textRequiredTitleInputStyle}
                                            >
                                                *
                                        </Text>
                                        </View>
                                        <View>
                                            <TextInput
                                                style={
                                                    require != "" ? StyleCommon.multiLineInputStyle : StyleCommon.multiLineRequiredInputStyle
                                                }
                                                editable={disable}
                                                onChangeText={text => setRequire(text)}
                                                value={require}
                                                multiline={true}
                                                underlineColorAndroid='transparent'
                                            >
                                            </TextInput>
                                            {require == "" ?
                                                <Text
                                                    style={StyleCommon.textRequird}
                                                >
                                                    Trường này không được để trống
                                </Text> :
                                                (null)}
                                        </View>
                                    </View>
                                ) : (
                                        <View>
                                            <Text
                                                style={StyleCommon.textTitleInputStyle}
                                            >
                                                {textName}
                                            </Text>

                                            <TextInput
                                                style={StyleCommon.multiLineInputStyle}
                                                editable={disable}
                                                multiline={true}
                                                underlineColorAndroid='transparent'
                                            >
                                            </TextInput>


                                        </View>
                                    )

                            )

                    ) :

                    (
                        null
                    )
            }

        </View>

    )
}

export default MultiLineTextInputComponent