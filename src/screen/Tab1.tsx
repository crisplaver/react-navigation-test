import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const Tab1Screen = (props: any) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text>Tab1 Screen</Text>
            <Button title='Home' onPress={() => navigation.navigate('Home')} />
            <Button title='Second' onPress={() => navigation.navigate('Second')} />
            <Button title='Third' onPress={() => navigation.navigate('Third')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12
    }
})

export default Tab1Screen;