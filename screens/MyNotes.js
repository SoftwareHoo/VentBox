import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header'

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.bodyText}>This is the page that lists active notes.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightcyan',
    },
    bodyText: {
        padding: 26
    }
});