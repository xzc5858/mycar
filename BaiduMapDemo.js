/**
 * Created by user on 2016/12/20.
 */
import React, {
    Component
} from 'react';

import {
    MapView,
    MapTypes,
    Geolocation
} from 'react-native-baidu-map';

import {
    AppRegistry,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import  SendIntentAndroid from 'react-native-send-intent';
import Dimensions from 'Dimensions';
import Buttton from './Button';


export default class BaiduMapDemo extends Component {
    // 初始化
    constructor() {
        super();
        this.state = {
            // Geolocation.getCurrentPosition().then(data=>{
            //     alert(JSON.stringify(data));
            // });

            // Geolocation.getCurrentPosition().then(data => {
            // center: {
            //         longitude: data.longitude,
            //         latitude: data.latitude
            // },
            // markers: {
            //     longitude: data.longitude,
            //     latitude: data.latitude,
            //     title: ""
            // },
            //
            // }).catch(e =>{
            //   console.warn(e, 'error');
            // });
            mayType: MapTypes.NORMAL,
            zoom: 15,
            trafficEnabled: false,
            baiduHeatMapEnabled: false,

        }
    };
    componentDidMount() {

    }


    gotoNext(){
        this.props.navigator.push({
            name: 'SetPage'
        });
    }



    render() {
        return (
            <View style={styles.container}>
                <MapView
                    trafficEnabled={this.state.trafficEnabled}
                    baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
                    zoom={this.state.zoom}
                    mapType={this.state.mapType}
                    center={this.state.center}
                    marker={this.state.marker}
                    markers={this.state.markers}
                    style={styles.map}
                    onMapClick={(e) => {
}}
                >
                </MapView>

                <View style={styles.row}>

                    <Buttton label="标准" onPress={() => {

    this.setState({
    mapType: MapTypes.NORMAL
    });
    }} />
                    <Buttton label="卫星" onPress={() => {

    this.setState({
    mapType: MapTypes.SATELLITE
    });
    }} />

                    <Buttton label="定位" onPress={() => {
    SendIntentAndroid.sendSms('18203528665', '1');
    setTimeout(function() {}, 1000);

    let url="http://";
    let opt={method: 'GET'};
    fetch(url, opt).then((response) =>
    {
    if (response.ok) {
    return response.json();
    }
    }).then((json) => {
    {/*alert(json.w);*/}
    this.setState({
    zoom: 15,
    marker: {
    latitude: json.w, //纬度
    longitude:json.j,//经度
    title: 'Your location'
    },
    center: {
    latitude: json.w,
    longitude:json.j
    }
    });

    }).catch((error) => {
    console.error(error);
    });


    }} />
                </View>

                <View style={styles.row}>
                    <Buttton label="Zoom+" onPress={() => {
    this.setState({
    zoom: this.state.zoom + 1
    });
    }} />
                    <Buttton label="Zoom-" onPress={() => {
    if(this.state.zoom > 0) {
    this.setState({
    zoom: this.state.zoom - 1
    });
    }

    }} />
                </View>

                <View style={styles.row}>
                    <Buttton label="交通" onPress={() => {
    this.setState({
    trafficEnabled: !this.state.trafficEnabled
    });
    }} />

                    <Buttton label="热图" onPress={() => {
    this.setState({
    baiduHeatMapEnabled: !this.state.baiduHeatMapEnabled
    });
    }} />

                    <Buttton label="设置" onPress={this.gotoNext.bind(this)}/>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
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
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 150,
        marginBottom: 10
    },
    tabIcon: {
        width: 20,
        height: 20,
        resizeMode: 'stretch',
        marginTop: 10,
        backgroundColor:'red',
    }
});
