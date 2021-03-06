import colors from './colors';

const styles = {
    //Login Screen
    screenLogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        marginHorizontal: 10,
    },

    screenLoginInput: {
        height: 40, 
        maxWidth: 400,
        borderColor: 'gray', 
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10
    },

    screenLoginButton: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginTop: 10,
        maxWidth: 400,
        borderRadius: 20,
    },

    screenLoginButtonCad: {
        alignItems: "center",
        padding: 10,
        marginTop: 10,
        maxWidth: 400,
        borderRadius: 20,
    },

    screenLoginButtonText: {
        alignItems: "center",
        padding: 10,
        marginTop: 10,
        maxWidth: 400,
        borderRadius: 20,
        fontWeight: 'bold'
    },

    screenLoginButtonTextSignIn: {
        color: colors.colorBlack,
        fontWeight: 'bold',
    },

    screenLoginButtonTextSignUp: {
        color: colors.colorApp,
        fontWeight: 'bold',
        fontSize: 16,
    },

    screenLoginImage: {
        width: 100,
        height: 100,
        margin: 10,
        alignItems: 'center',
    },

    //End Login Screen
    //Home Screen
    screenHome: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        
    },

    screenHomeButton: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        margin: 15,
        borderRadius: 20,
    },

    screenHomeItemsTitle: {
        marginHorizontal: 10,
        textAlign: 'justify',
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center'
    },

    screenHomeItemsTitleText: {
        marginHorizontal: 10,
        textAlign: 'justify',
        fontSize: 14,
        fontWeight: 'bold',
        justifyContent: 'center'
    },

    screenHomeItemsTitleTextInfo: {
        textAlign: 'justify',
        fontSize: 14,
        justifyContent: 'center'
    },

    screenHomeItemsArray: {
        margin: 5,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: colors.corSelecionado,
        padding: 12,
        flexDirection: 'row',
    },

    //End Home Screen
    //Account Screen
    screenAccountItemsTitleText: {
        marginVertical: 5,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center'
    },

    screenAccountItemsTitleTextInfo: {
        marginVertical: 5,
        textAlign: 'justify',
        fontSize: 16,
        justifyContent: 'center'
    },

    screenAccountButton: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        minWidth: 300,
        padding: 10,
        marginVertical: 20,
        maxWidth: 400,
        borderRadius: 20,
    },

    screenAccountButtonDelete: {
        alignItems: "center",
        backgroundColor: colors.colorRed,
        minWidth: 300,
        padding: 10,
        marginBottom: 10,
        maxWidth: 400,
        borderRadius: 20,
    },

    screenAccountButtonTextBlack: {
        color: colors.colorBlack,
        fontWeight: 'bold',
    },

    screenAccountButtonText: {
        color: colors.colorWhite,
        fontWeight: 'bold',
    },

    //End Account Screen
    //Register Screen

    registerScreenButtonImg: {
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: 'transparent',
        marginBottom: 10,
        borderRadius: 20,
    },
}

export default styles;