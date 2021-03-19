
import React, { Component } from 'react';

import {View, Text, Pressable, StyleSheet } from 'react-native';



class CoinsScreen extends Component{
    handlesPress = () => {
        console.log("clic  pantalla de detalle",this.props);
        this.props.navegation.navegate('DetailsCoponent');
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.btnText}> Pantalla Luis Jhovanny  </Text>
                <Pressable  style = {styles.btn} onPress={this.handlesPress}><Text style={styles.btnText}>Ir  a Detalle </Text></Pressable>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: "blue"
     },
    btn:{
        padding : 8 ,
        backgroundColor : "red",
        borderRadius : 8,
        margin : 22   
    },
    btnText:{
        color: "#fff",
        textAlign: "center",

    }

})

export default CoinsScreen;
