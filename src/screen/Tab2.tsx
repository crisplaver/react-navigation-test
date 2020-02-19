import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const Tab2Screen = (props: any) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text>Tab2 Screen</Text>
            <Button title='Home' onPress={() => navigation.navigate('Home')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12
    }
})

export default Tab2Screen;