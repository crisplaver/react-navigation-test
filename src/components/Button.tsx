import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const Button = (props: any) => {
    const { containerStyle, title, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, containerStyle]}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        marginVertical: 12,
        backgroundColor: 'lightblue'
    }
})

export default Button;