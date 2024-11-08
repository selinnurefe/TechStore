import { StyleSheet, Text, View, Dimensions,Image, TextInput} from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
        <View style={styles.headerTitleContainer}> 
            <Image source={require('../../../assets/logo-yeni.png')} style={styles.logo}/>
        </View>
        <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#888"
                    selectionColor='black'
                />
        </View>

        <View style={styles.titleContainer}>
            <Text style={styles.title}>Products</Text>
        </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#DF0000',
        height:Dimensions.get('window').height / 3

    },
    headerTitleContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    logo:{
        width:250,
        height:150,
        resizeMode:'contain',
    },
    titleContainer:{
        backgroundColor:'black',
        padding:5
    },
    title:{
        color:'white',
        fontSize:20,
        fontWeight:'600',  
    },
    searchContainer: {
        marginTop: 10,
        paddingHorizontal: 15,
        backgroundColor:'black',
        padding:10,
    },
    searchInput: {
        backgroundColor: '#FFF', // Arama çubuğu beyaz renkte
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#000',
        borderColor: '#ddd',
        borderWidth: 1,
    },
})