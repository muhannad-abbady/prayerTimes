import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const A_Row = (params) => {
    return (
        <View style={[arStyle.View, params.style]}>
            <View style={arStyle.Content}>
                <Text style={arStyle.text} >{params.title}</Text>
                <Text style={arStyle.text} >{params.time}</Text>
            </View>
        </View>
    );
}

const arStyle = StyleSheet.create({
    View: {
        paddingHorizontal: 15,
    },
    Content: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignContent: 'space-between',
        backgroundColor: '#00000020',
        borderRadius: 6,
        padding: 25,
    },
    card: {
        backgroundColor: '#00000020',
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 34,
        fontWeight: 'bold',
        color: '#000',
    }

})

export default A_Row;