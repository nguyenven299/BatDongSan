import {
    StyleSheet
} from 'react-native';
const StyleCommon = StyleSheet.create({
    backgoundModal:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    inputStyle:
    {
        width: "90%",
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#9B999B',

        paddingLeft: 20,
        paddingRight: 30,
        marginHorizontal: 20,
    },
    inputDisableStyle:
    {
        width: "90%",
        height: 40,
        backgroundColor: '#A09EA0',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#9B999B',

        paddingLeft: 20,
        paddingRight: 30,
        marginHorizontal: 20,
    },
    inputRequiredStyle:
    {
        width: "90%",
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'red',
        paddingLeft: 20,
        paddingRight: 30,
        marginHorizontal: 20,
    },
    textTitleInputStyle:
    {
        margin: 10,
        fontSize: 17,
        marginLeft: 20
    },
    textRequiredTitleInputStyle:
    {
        margin: 10,
        fontSize: 17,
        marginLeft: 10,
        color: 'red'
    },
    textRequird:
    {
        color: 'red',
        margin: 5,
        marginLeft: 20,
        fontSize: 10
    },
    buttonStyle:
    {
        width: "90%",
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#9B999B',
        paddingLeft: 20,
        paddingRight: 30,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',

    },
    buttonDisableStyle:
    {
        width: "90%",
        height: 40,
        backgroundColor: '#CECECE',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#9B999B',
        paddingLeft: 20,
        paddingRight: 30,
        marginHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonRequiredStyle:
    {
        width: "90%",
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'red',
        paddingLeft: 20,
        paddingRight: 30,
        marginHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'row'
    },
    multiLineInputStyle:
    {
        width: "90%",
        height: 80,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#9B999B',
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 30,
        marginHorizontal: 20
    },
    multiLineRequiredInputStyle:
    {
        width: "90%",
        height: 80,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'red',
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 30,
        marginHorizontal: 20
    },
    multiLineDisableInputStyle:
    {
        width: "90%",
        height: 80,
        backgroundColor: '#A09EA0',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#9B999B',
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 30,
        marginHorizontal: 20
    },
    buttonClose:
    {
        backgroundColor: "#F0EEF0",
        width: "100%",
        padding: 10,
        marginTop: 20,
        elevation: 2,

    },
    textStyleClose:
    {
        color: "black",
        fontSize: 20,
        textAlign: "center"
    },
    buttonModalStyle:
    {
        backgroundColor: "#FBFAFB",
        width: "85%",
        borderWidth: 0.2,
        padding: 10,
        // marginHorizontal: "10%",
        marginVertical: 10,
        borderRadius: 2,
        flexDirection: 'row',
        marginHorizontal: 20
    },
    buttonModalStyle1:
    {
        backgroundColor: "white",
        width: "100%",
        padding: 10,
        // marginHorizontal: "10%",
        borderRadius: 2,
        flexDirection: 'row',
        borderBottomWidth: 3,
        borderBottomColor: '#DEDEDE'
    },
    viewStyleRefesh:
    {
        backgroundColor: '#FFA605',
        width: "90%",
        marginHorizontal: 20,
        marginVertical: 20,
        flexDirection: 'row'

    },
    textStyleRefesh:
    {
        color: 'white',
        fontSize: 20,
        padding: 10,
    },


});
export default StyleCommon;