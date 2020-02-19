import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const SecondScreen = (props: any) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text>Second Screen</Text>
            <Button title='Third' onPress={() => navigation.navigate('Third')} />
            <Button title='Go Back' onPress={() => navigation.pop()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12
    }
})

export default SecondScreen;