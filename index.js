/**
 * Created by user on 2016/12/20.
 */
import React, {
    Component
} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import  TabNavigator from 'react-native-tab-navigator';

export default class index extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>

                </TabNavigator>
            </View>
        )
    }
}

const  styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});