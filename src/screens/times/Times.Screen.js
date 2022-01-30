import React from 'react';
import { View } from 'react-native';
import AppHeader from '../../components/header';
import A_Row from '../../components/athan.tableRow';

const bg = require('../../../assets/bg1.jpg');

function TimesScreen() {
    return (
        <View style={{flex:1}}>
            <AppHeader title="أوقات الصلاة" icon="timetable" />
            <View style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                flex: 1,
            }}>
                <A_Row title="صلاة الفجر" time="6.32" />
                <A_Row title="شروق الشمس" time="7.58" />
                <A_Row title="صلاة الظهر" time="6.32" />
                <A_Row title="صلاة العصر" time="6.32" />
                <A_Row title="صلاة المغرب" time="6.32" />
                <A_Row title="صلاة العشاء" time="6.32" />

            </View>
        </View >

    );
}

export default TimesScreen;