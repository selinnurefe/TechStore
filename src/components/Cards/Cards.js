import { Image, Text, View,Dimensions, StatusBar } from 'react-native'
import React from 'react'
import styles from './Cards.style'

const Cards = ({cardData}) => {
  return (
    <View style={styles.container}>
      {/* <StatusBar hidden/> */}
      <View style={styles.cardContainer}>
        <Image style={styles.cardImage} source={{uri:cardData.imgURL}}/>
        <View style={styles.innerContainer}>
            <Text style={styles.title}>{cardData.title}</Text>
            <Text style={styles.price}>{cardData.price}</Text>
            <Text style={styles.stock}>{cardData.inStock ? 'In Stock' : 'Out of Stock'}</Text>
        </View>
      </View> 
    </View>
  )
}

export default Cards;

