import React from 'react'
import {
    TextInput, View, Text
} from 'react-native';


function InputTextComponent({ textName }) {
    return (
        <View

        >
            <Text
                style=
                {{
                    margin: 10,
                    fontSize: 17,
                    marginLeft: 20
                }}
            >
                {textName}
            </Text>
            <TextInput
                style=
                {{
                    width: "90%",
                    height: 40,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    borderWidth: 0.5,
                    borderColor: '#9B999B',
                    marginTop: 10,
                    paddingLeft: 20,
                    paddingRight: 30,
                    marginHorizontal: 20
                }}
            >

            </TextInput>
        </View>

    )
}

export default InputTextComponent