
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CategoryHome} from './CategoryHome';
const Flex = () => {
return (
<View style={[styles.container, {

flexDirection: "column"
}]}>
<View style={{ flex: 1, backgroundColor: "yellow", justifyContent:"center"}} >CategoryHome</View>
<p>Categoria</p>

<View style={{flex: 1,backgroundColor: "darkorange",justifyContent:"center",flexDirection: "row",alignItems: "center" }}>
<View style={{ flex:1, flexDirection: "row", justifyContent:"center"}}>POST 1</View>
<View style={{flex:1, flexDirection: "row", justifyContent:"center"}}>POST 2</View>
<View style={{flex:1, flexDirection: "row", justifyContent:"center"}}> POST 3</View>
</View>
<p>Vector-3</p>
<View style={{ flex: 1,flexDirection:"row", backgroundColor: "green", justifyContent:"center", alignItems:"center" }}>
<View style={{flex:1, flexDirection:"row",justifyContent:"center",}}>L1</View>
<View style={{flex:1, flexDirection:"row",justifyContent:"center",}}>L2</View>
<View style={{flex:1, flexDirection:"row",justifyContent:"center",}}>L3</View>
</View> </View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
}
});

export default Flex;