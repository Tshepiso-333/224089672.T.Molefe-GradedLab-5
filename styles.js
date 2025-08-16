import Components from "./ReactNativeElements";

const Styles = Components.StyleSheet.create({
    ScrollContainer: {
        flexGrow: 1,
        backgroundColor: "#d11589ff",
        paddingHorizontal: 15,
        paddingVertical: 10,
        rowGap: 10,
    },

    SafeAreaContainer: {
        flex: 1,
        backgroundColor: "#ffffff",
    },

    KeyboardAvoidingContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#f8f9fb",
    },

    LoginContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: "#094dbaff",
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        rowGap: 10,
        height: "auto",
        maxWidth: "95%",
        marginLeft: "2.5%",
        justifyContent: "center",
        
    },    
    Container: {
        flex: 1,
        padding: 20,
        backgroundColor: "transparent",
        rowGap: 10,
        maxHeight: "50%",
        borderRadius: 15,
        shadowColor: "#dfd5d5ff",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 4,
    },

    InputFileds: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#dce1eb",
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        color: "#333",
        marginBottom: 15,
    },

    Lables: {
        fontSize: 40,
        fontWeight: "600",
        color: "#061051ff",
        marginBottom: 6,
        alignSelf: "center",
    },

    Navigaters: {
        flexDirection: "row",
        justifyContent: "space-between",
        justifyContent: "center",
        backgroundColor: "#6c63ff",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
    },

    Stacks: {
        flexDirection: "column",
        gap: 10,
    },

    Images: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
        borderRadius: 12,
        marginBottom: 15,
    },

    Button: {
        backgroundColor: "#6c63ff",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },

    ButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },

    List: {
        backgroundColor: "#fff",
        padding: 15,
        marginVertical: 8,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },

    Indicators: {
        alignSelf: "center",
        marginVertical: 20,
    }
});

export default Styles;
