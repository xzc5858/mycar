/**
 * Created by user on 2016/12/23.
 */
/**
 * Created by user on 2016/12/20.
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
    TouchableHighlight
} from 'react-native';

export default class Buttton extends Component {
    static propTypes = {
        label: PropTypes.string,
        onPress: PropTypes.func
    };

    static defaultProps = {
        label: 'Buttton',
        onPress() {

        }
    };
    render() {
        return (
            <TouchableHighlight
                style={styles.btn}
                onPress={this.props.onPress}>
                <Text style={{color: 'white'}}>{this.props.label}</Text>
            </TouchableHighlight>
        );
    }
};


const styles = StyleSheet.create({

    btn: {
        height: 24,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cccccc',
        paddingLeft: 8,
        paddingRight: 8,
        margin: 4
    },


});