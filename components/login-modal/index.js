import {View, Text, StyleSheet} from 'react-native'
import { ButtonPrimary, ButtonSecondary } from '../button'

export default function LoginModal(){
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Realizar Login</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content:{
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,   
    }
})