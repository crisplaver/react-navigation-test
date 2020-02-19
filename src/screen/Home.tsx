import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';


const HomeScreen = (props: any) => {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title='Second' onPress={() => navigation.navigate('Second')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12
    },
    button: {
        paddingVertical: 12
    }
})

export default HomeScreen;