import React from 'react';
import Cards from './src/components/Cards';
import { FlatList, Text, View} from 'react-native';
import techData from './src/components/data.json'
import Header from './src/components/Header/Header';

export default function App() {
const renderCard = ({item})=><Cards cardData={item}/>

  return (
    <View style={{flex:1}}>
      <Header/>
      <FlatList keyExtractor={(item, index) => item.id.toString()} data={techData} renderItem={renderCard}  numColumns={2}/>
    </View>
   
  );
}


