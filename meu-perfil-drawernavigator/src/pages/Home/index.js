import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Button, Text, View } from 'react-native';

// import { Container } from './styles';

const Home = () => {
    const navigation = useNavigation();

    function irSobre() {
        navigation.navigate('Sobre', { nome: 'Andrei da pororoca', email: 'pororoca@andreizinho.com' });
    }


    return (
        <View>
            <Text>Home</Text>
            <Text>Bem vindo a tela Home!</Text>
            <Button
                title="Contato"
                onPress={() => navigation.navigate('Contato')} />
            <Button
                title="Abrir menu"
                onPress={() => navigation.toggleDrawer()} />

        </View>
    );
}

export default Home;