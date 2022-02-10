import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



export default function Header({ title, navigation }) {
    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            {/* hamburger menu icon */}
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        width: Dimensions.get('screen').width,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        color: 'black',
        fontFamily: 'NewsCycle-Bold',
        letterSpacing: 1,
        fontSize: 22,
        paddingLeft: 25,
    },
    icon: {
        position: 'absolute',
        right: 25,
    }

});
