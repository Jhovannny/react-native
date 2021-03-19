

import {StyleSheet,Text,view} from "react-native";

const Flex=()=>{
  return(
    <View style={[styles.container,{
    flexDirection:"colum"
    
    }]}>
<View style={{ flex:2,backgruundColor:"red" }}>Slider</View>
<P>Base de datos</P>
<View style={{ flex:1,backgruundColor:"yellow",flexDirection="row",justifyContent:"center",alignitems:"center" }}>
<View style={{ flex:1,alignitems:"center"}}>POST1</View>
<View style={{ flex:1,alignitems:"center"}}>POST2</View>
<View style={{ flex:1,alignitems:"center"}}>POST3</View>

</View>

<P>Desarrolo web</P>
<View style={{ flex:1,backgruundColor:"yellow",flexDirection="row",justifyContent:"center",alignitems:"center" }}>
<View style={{ flex:1,alignitems:"center" ,alignitems:"center"}}>POST1</View>
<View style={{ flex:1,alignitems:"center",alignitems:"center"}}>POST2</View>
<View style={{ flex:1,alignitems:"center",alignitems:"center"}}>POST3</View>

</View>
<P>Base de datos</P>
<View style={{ flex:1,backgruundColor:"yellow",flexDirection="row",justifyContent:"center",alignitems:"center" }}>
<View style={{ flex:1,alignitems:"center",alignitems:"center"}}>POST1</View>
<View style={{ flex:1,alignitems:"center",alignitems:"center"}}>POST2</View>
<View style={{ flex:1,alignitems:"center",alignitems:"center"}}>POST3</View>

</View>
</View>
      );
      };

      const style=StyleSheet.create({
container:{
  flex:1,
  padding:20,
}

      });

      export default Flex;


