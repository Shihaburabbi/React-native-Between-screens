import React, {Component} from 'react';
import { StyleSheet, View, Button } from 'react-native';


export default class FirstPage extends Component {
    static navigationOptions={
        title:'First Page',
        headerStyle:{
            backgroundColor:'#f4511e'
        },
        headerTintColor:'#FFF',
        headerTitleStyle:{
            fontWeight:'bold'
        },
    };

    render() {
        const {navigate} = this.props.navigation;
        return(
            <View style={StyleSheet.Component}> 
            <Button title='Go Next' 
            onPress={() => navigate('SecondPage')}
            />
            </View>
        )
    }
}

const style = StyleSheet.create({
    Component:{
        flex:1,
        backgroundColor:'#FFF',
        alignItems:'center',
        justifyContent:'center'
    }
})