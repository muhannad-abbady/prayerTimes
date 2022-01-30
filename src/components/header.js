import * as React from 'react';
import { Appbar } from 'react-native-paper';

const AppHeader = (param) => {

    return (
        <Appbar style={{height : 90}}>
            <Appbar.Action icon={param.icon} style={{ marginLeft: 100 }} />
            <Appbar.Content title={param.title} style={{ alignItems: 'center', marginLeft: -100 }} titleStyle={{ fontSize: 35 }}
            />
            
        </Appbar>

    );

}

export default AppHeader