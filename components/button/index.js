import { Text, Pressable, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

// inline: style={{ opacity: 1.0 }}

// StyleSheet: style={styles.obj_name}

// funcao: style={ () => [{ opacity: 1.0 }, styles.obj_name] }


export function ButtonPrimary({ text, icon, onClick }) {
    return (
        <Pressable 
            style={({pressed}) => [
                styles.button_primary,
                { opacity: pressed ? 0.5 : 1.0 }
            ]} 
            onPress={onClick}
            >
            <Ionicons
                name={icon}
                size={20}
                color={"white"}
            />
            <Text style={styles.button_primary_text}>{text}</Text>
        </Pressable>
    )
}

export function ButtonSecondary({ text, icon, onClick }) {
    return (
        <Pressable 
            style={({pressed}) => [
                styles.button_secondary,
                {opacity: pressed ? 0.5 : 1.0}
            ]} 
            onPress={onClick}
        >
            <Ionicons
                name={icon}
                size={20}
                color={"#f94d4d"}
            />
            <Text style={styles.button_secondary_text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button_primary: {
        width: '100%',
        flexDirection: 'row',
        gap: 12,
        backgroundColor: '#f94d4d',
        borderRadius: 8,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button_primary_text: {
        color: "#fff",
        fontSize: 20,
    },
    button_secondary: {
        width: '100%',
        flexDirection: 'row',
        gap: 12,
        backgroundColor: '#fff',
        borderColor: '#f94d4d',
        borderWidth: 2,
        borderRadius: 8,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button_secondary_text: {
        color: "#f94d4d",
        fontSize: 20,
    },
})