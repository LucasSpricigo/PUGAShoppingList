import { StyleSheet, Text, View, Image } from 'react-native';
import {Link} from 'expo-router'

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={require('../assets/avatar.png')} style={styles.avatar}/>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>PUGA Shopping List</Text>
        <Text style={styles.text}>
          Monte sua lista de compras
        </Text>
        <Link style={styles.button} href={"/home"}>
          <Text style={styles.buttonText}>Acessar</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  containerImage: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'centar',
  },
avatar: {
  width: 230,
  height: 230,
  borderRadius: 115,
  resizeMode: 'cover',
},
content: {
  flex:1,
  marginHorizontal: 5,
  backgroundColor: '#dadada',
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  paddingHorizontal: '5%'
},
title: {
  fontSize: 30,
  fontWeight: 'bold',
  marginVertical: 20,
  textAling: 'center',
},
text: {
  fontSize: 16,
  color: 'gray',
},
button: {
  position: 'absolute',
  backgroundColor: '#000',
  bottom: '15%',
  alignSelf: 'center',
  borderRadius: 50,
  paddingVertical: 15,
  width: '60%',
  textAlign: 'center',
},
buttonText: {
  fontSize: 22,
  color: '#fff',
  fontweight:'bold'
},
});
