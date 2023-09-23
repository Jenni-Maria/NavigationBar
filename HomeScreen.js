import React, { useLayoutEffect, useState } from "react";
import {StyleSheet, View, Text, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen({navigation}) {
    const [message, setMessage] = useState('testing');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#f0f0f0'
            },
            headerRight: () => (
            <AntDesign
                style={styles.navButton}
                    name="arrowright"
                    size={24}
                    onPress={() => navigation.navigate('Second', {message: message})}
                />
        )
    })
}, [message])

    return (
    <View style={StyleSheet.container}>
        <Text>Home Screen with my own text here</Text>
        <TextInput onChangeText={text => setMessage(text)} value={message} placeholder="Type your own message here..."/>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    navButton: {
        marginRight: 5,
        padding: 4,
    }
});