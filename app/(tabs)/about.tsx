import { StyleSheet, Text, View } from "react-native";

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is my change to the about screen to see if Updates work automatically</Text>
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