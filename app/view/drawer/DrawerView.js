import React, { Component } from 'react';
import { Text, View, StyleSheet, BackHandler, Image, TouchableOpacity, ImageBackground } from 'react-native';
import CommonStyle from '../../common/CommonStyle';

class DrawerView extends Component {
    render() {
        return (
            <View style={[CommonStyle.root, { backgroundColor: '#FFFFFF' }]}>
                <View style={{ alignItems: 'center' }}>
                    <ImageBackground source={require('../../img/drawer_icon2.png')} style={{ width: '100%', height: 185, marginTop: 10, marginBottom: 10, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 16 }}>
                            <Image source={require('../../img/default_icon.png')} />
                            <Text style={{ color: '#FFFFFF', fontSize: 14, marginLeft: 10 }}> Jack</Text>
                        </View>
                        <Text style={{ color: '#FFFFFF', fontSize: 14, marginTop: 16, marginLeft: 16 }}>送给程序员的爱心书单</Text>
                    </ImageBackground>
                    <Image source={require('../../img/drawer_icon1.png')} style={{ position: 'absolute', bottom: 0, right: 0 }} />
                </View>

                <View style={styles.bottom_view}>
                    <Image source={require('../../img/drawer_icon3.png')} />
                    <Image source={require('../../img/drawer_arrow.png')} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bottom_view: {
        borderBottomColor: '#828181',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 42,
        paddingBottom: 16,
        marginLeft: 8,
        marginRight: 8
    }
})
export default DrawerView;