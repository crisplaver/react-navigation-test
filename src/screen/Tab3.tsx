import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const Tab3Screen = (props: any) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text>Tab3 Screen</Text>
            <Button title='Third' onPress={() => navigation.navigate('Third')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12
    }
})

export default Tab3Screen;