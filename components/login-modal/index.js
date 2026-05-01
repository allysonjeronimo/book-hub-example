import {View, Text, StyleSheet} from 'react-native'
import { ButtonPrimary, ButtonSecondary } from '../button'

export default function LoginModal({onClose}){
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Realizar Login</Text>
                <View style={{padding: 8}}>
                     <ButtonPrimary
                        text={"Entrar"}
                        onClick={()=>{}}
                    />
                    <ButtonSecondary
                        text={"Cancelar"}
                        onClick={onClose}
                    />
                </View>
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
        width: '80%'
    },
    title:{
        fontSize: '26',
        fontWeight: 'bold',
        color: "#7d7d7d"
    }
})