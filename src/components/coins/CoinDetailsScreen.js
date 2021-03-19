
import React, { Component } from 'react';

import {Text,View,StyleSheet} from 'react-native';


class CoinDetailsScreen extends Component{
    render(){
        return(
           
                <View style={style.container}>
                 <Text> Pantalla detail Luis Jhovanny</Text>


            </View>
        )
    }
}


const styles= StyleSheet.create({
   container:{
       backgroundColor:'yellow',
       flex: 1,
   } 
})

export default CoinDetailsScreen;