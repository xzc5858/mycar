/**
 * Created by user on 2016/12/23.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Navigator,
    BackAndroid,
    View
} from 'react-native';

import SplashPage from  './SplashPage';
import BaiduMapDemo from './BaiduMapDemo';
import SetPage from './set';
export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Navigator
                initialRoute={{id: 'SplashPage', name: 'SplashPage'}}
                renderScene={this.renderScene.bind(this)}
                configureScene={this.configureScene}
            />
        );
    }

    configureScene(route, routeStack) {

        // return Navigator.SceneConfigs.PushFromRight; // 右侧弹出Navigator.SceneConfigs.FadeAndroid
        return Navigator.SceneConfigs.FadeAndroid;//淡入淡出
    }

    renderScene(route, navigator){
        if (route.name== 'SplashPage'){
            return <SplashPage navigator={navigator}/>
        }
        else if (route.name == 'Index') {
            return <BaiduMapDemo navigator={navigator}/>
        } else if (route.name == 'SetPage') {

            return <SetPage navigator={navigator}/>
        }

    }


}