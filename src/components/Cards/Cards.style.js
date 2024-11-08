import { Dimensions, StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#000000',
        flex:1
    },
    cardContainer:{
        backgroundColor:'white',
        margin:10,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:5,
        marginTop:20,   
        
    },
    cardImage:{
        height: Dimensions.get('window').height/4,
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    innerContainer:{
        padding:8,
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:4,
    },
    price:{
        fontSize:16,
        fontWeight:'bold',
        marginTop:4
    },
    stock:{
        fontStyle:'italic',
        color:'red',
        textAlign:'right',
        marginRight:4,
    },
    
    
  });

  export default styles;