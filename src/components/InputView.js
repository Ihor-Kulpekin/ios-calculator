import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const InputView = ({result=0}) => {
    return (
            <View style={styles.container}>
                <Text style={styles.text}>{result}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'flex-end',
        justifyContent: 'flex-end',
        marginBottom: 20,
        marginRight: 25
    },
    text: {
        color: 'white',
        fontSize: 40
    }
})

export default InputView;
