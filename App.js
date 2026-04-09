import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

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
        <Text style={styles.title}>O Senhor dos Anéis</Text>
        <Text style={styles.author}>Autor: J.R.R. Tolkien</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
});
