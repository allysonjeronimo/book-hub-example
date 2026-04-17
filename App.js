import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Rating } from 'react-native-ratings';
import { ButtonPrimary, ButtonSecondary } from './components/button';

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

        <View style={styles.price}>
            <Text style={styles.price_symbol}>R$</Text>
            <Text style={styles.price_value}>9,00</Text>
        </View>

        <View style={styles.divider}/>
        <View style={styles.buttons_container}>         
            <ButtonSecondary
              text="FAVORITAR"
              icon="heart"
              onClick={()=>{}}
            />
            <ButtonPrimary
              text="COMPRAR"
              icon="cart"
              onClick={() => {}}  
            />
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
  buttons_container:{
    gap: 12
  },
  price:{
    width: '100%',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginVertical: 6
  },
  price_symbol:{
    fontSize: 18,
  },
  price_value:{
    fontSize: 32,
    fontWeight: 600
  }
});
