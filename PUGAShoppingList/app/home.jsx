import React from 'react'
import {
    Alert, 
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity, 
    View
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Home() {

    function addProduto() {
        Alert.alert("Adicionar Produto");
    }

  return (
    <View style={{flex:1, backgroundColor: '#000'}}>
        <ImageBackground
            source={require('../assets/background.jpg')}
            resizeMode ='repeat'
            style={{ flex: 1, justifyContent: 'flex-start' }}
        >
            <View style={styles.header}>
                <Text style={styles.title}>Lista de Compras</Text>
                <Ionicons name='trash' size={32} color="#fff"/>
            </View>

            {/* Lista de Produtos */ }

            <View style={styles.footer}>
                <View style={styles.inputContainer}>
                    <TextInput
                    color={"#fff"}
                    fontSize={18}
                    placeholder='Digite o nome do produto...'
                    placeholderTextColor="#aeaeae"
                    />
                </View>
                <TouchableOpacity style={styles.iconContainer} >
                    <Ionicons name="add" size={36} color="#fff"/>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({})