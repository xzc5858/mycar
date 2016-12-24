/**
 * Created by user on 2016/12/23.
 */
import React, {
    Component,
    PropTypes
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight
} from 'react-native';
import Index from './BaiduMapDemo';
import Buttton from './Button';
export default class Set extends Component {

    gotoNext() {
        this.props.navigator.push({name:"Index"});

    }
    render() {
        return (
            <View>
                <View><TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({input: text})}
                /></View>
                <View><Buttton label="设置" onPress={this.gotoNext.bind(this)}/></View>
                <View></View>
            </View>
        )
    }
}

