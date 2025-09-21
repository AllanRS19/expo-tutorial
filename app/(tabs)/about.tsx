import { StyleSheet, Text, View } from "react-native";

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Este es un cambio de prueba</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
});

export default AboutScreen;