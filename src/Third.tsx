import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './components/Button';

const ThirdScreen = (props: any) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text>Third Screen</Text>
            <Button title='Go Back' onPress={() => navigation.goBack()} />
            <Button title='Go Back 2' onPress={() => navigation.pop(2)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12
    }
})

export default ThirdScreen;