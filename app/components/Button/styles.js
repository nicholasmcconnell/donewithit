import { StyleSheet, Platform } from 'react-native';
import colors from '../../config/colors'

const styles = StyleSheet.create({
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        fontWeight: '300',
    }
})

export default styles;