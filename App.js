import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Rating } from 'react-native-ratings';
import { Ionicons } from '@expo/vector-icons'

export default function App() {
  return (
    // JSX 
    <View style={styles.container}>
      <View style={styles.gallery}>
        <Image
          source={require('./assets/lotr_books.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.details}>
        <View style={styles.header}>
          <Text style={styles.title}>O Senhor dos Anéis</Text>
          <Text style={styles.author}>Autor: J.R.R. Tolkien</Text>
          <Rating
            style={styles.rating}
            imageSize={20}
            defaultRating={5}
          />
        </View>
        <View style={styles.divider}/>
        <View style={styles.buttons_container}>
             <Pressable style={styles.favorite_button}>
              <Ionicons
              name={"heart"}
              size={20}
              color={"#f94d4d"}
            />
            <Text style={styles.favorite_button_text}>FAVORITAR</Text>
          </Pressable>
          <Pressable style={styles.buy_button}>
            <Ionicons
              name={"cart"}
              size={20}
              color={"white"}
            />
            <Text style={styles.buy_button_text}>COMPRAR</Text>
          </Pressable>
        </View>
     
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  gallery:{
    height: 200,
    width: '100%',
    backgroundColor: '#545454'
  },
  image:{
    width: '100%',
    height: 200,
    resizeMode: 'contain'
  },
  details:{
    padding: 12
  },
  title:{
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'left',
    color: '#303030'
  },
  author:{
    fontSize: 18,
    color: '#7d7d7d',
    textAlign: 'left'
  },
  rating:{
    alignSelf: 'flex-start',
    marginVertical: 8
  },
  divider:{
    width: '100%',
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#b4b4b4'
  },
  favorite_button:{
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
  favorite_button_text:{
    color: "#f94d4d",
    fontSize: 20,
  },
  buy_button:{
    width: '100%',
    flexDirection: 'row',
    gap: 12,
    backgroundColor: '#f94d4d',
    borderRadius: 8,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buy_button_text:{
    color: "#fff",
    fontSize: 20,
  },
  buttons_container:{
    gap: 12
  }
});
