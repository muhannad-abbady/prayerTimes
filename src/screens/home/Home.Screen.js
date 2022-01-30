import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppHeader from '../../components/header';
import Geo from '../../components/geo';

const Token = 'pk.091fb4ce9431f89575100cebff9375b5'
const url = "https://us1.locationiq.com/v1/search.php?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json"


function HomeScreen() {
    const [clock, setclock] = useState(new Date().toLocaleTimeString('fa-IR'));
    useEffect(() => {
        const interval = setInterval(
          () => setclock(new Date().toLocaleTimeString('fa-IR')),
          1000
        );
    
        return () => {
          clearInterval(interval);
        }
    }, []);
    


    return (
        <View style={{flex:1}}>
            <AppHeader title="الوقت" icon="timetable" />
            <View style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                flex: 1,
            }}>
                <Text style={styles.text}>الوقت الآن</Text>
                <Text style={styles.clock}>{clock}</Text>
                <Text style={styles.clock}>{Geo()}</Text>

            </View>
        </View >

    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
        textAlign: 'center',
    },
    clock: {
        fontSize: 90,
        fontWeight: 'bold',
        color: '#25b',
        textAlign: 'center',
    }
})