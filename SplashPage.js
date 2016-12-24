'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Navigator,
    BackAndroid,
    View
} from 'react-native';

class SplashPage extends Component {
    componentWillMount() {
        var navigator = this.props.navigator;
        setTimeout(() => {
            navigator.replace({
                name: 'Index',
            });
        }, 1000);
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#d5777c', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: 'white', fontSize: 32,}}>私家车管理</Text>
            </View>
        );
    }
}

module.exports = SplashPage;