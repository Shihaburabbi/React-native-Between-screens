import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class SecondPage extends Component {
    static navigationOptions = {
        title: 'Second Page',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={StyleSheet.Component}>
               <Text>Second Page</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    Component: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        margin:50
    }
});