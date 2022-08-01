import React, { useEffect, useState } from 'react';
import { 
  View , 
  Text, 
  Image, 
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  FlatList
} from 'react-native';
import axios from 'axios';
import { BASE_URL } from '../util/constant'

const Pokedex = ({ navigation }) => {

  const [countPoke, setCountPoke] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [pokemonData, setPokemonData] = useState([]);
  const [offset, setOffset] = useState(1);
  const [limit, setLimit] = useState(20);
  const [pokeItem, setPokeItem] = useState({});

  var pokdata = [];


   function onClicCard(item) {
    console.log(item);
    setPokeItem(item);
    setModalVisible(true);
  };

  function setParams(){
    // setOffset(offset + 1);
    setLimit(limit + 20)
  }

  async function getPokemon() {
    await axios.get(BASE_URL + 'pokemon/', {params:{
       "offset": offset,
       "limit" : limit 
    }})
      .then(function (response) {
        setParams();
        console.log(offset);
        setCountPoke(response.data.count);
        response.data.results.forEach(getPokemonDetail);   
      })
      .catch(function (error) {
        console.log(error);
      })

 }

 async function getPokemonDetail(item) {
  await axios.get(item.url)
    .then(function (response) {
        pokdata.push(response.data);
        setPokemonData(pokdata);
    })
    .catch(function (error) {
      console.log(error);
    })
}


const renderItem = ({item}) => {
  return(
    <TouchableOpacity onPress={() => {onClicCard(item)}}>
    <View style={styles.cardPoke}>
    <Image style={{width:250,height:250}} source={{uri: item.sprites.front_shiny}} />
    <Text style={styles.namePokemon}>{item.name}</Text>

    <View style={{flexDirection:'row'}}>
    {item.types.map((tipe, index) => {
          return <Text style={styles.typePokemon}>{tipe.type.name}</Text>
        })}
    </View>

  
    </View>
    </TouchableOpacity>
  );
}


  useEffect(() => {
    getPokemon();
  }, []);

    return (
     <SafeAreaView  style={styles.container}>

        <Text style={styles.titlePokedex}>Pokedex</Text>
        <Text style={styles.descPokedex}>All Generation Totaling</Text>
        <Text style={styles.descPokedex}>{countPoke} Pokemon</Text>

        <FlatList
        data={pokemonData}
        keyExtractor={(item) => item.id.toString() }
        renderItem={renderItem}
        contentContainerStyle={{flexGrow:1}}
        onEndReachedThreshold={0.2}
        onEndReached={getPokemon}
        />

        <Modal
            animated
            animationType="slide"
            visible={modalVisible}
            transparent
            onRequestClose={() => setModalVisible(false)}>
            <View style={{flex:1}}></View>   
            <View style={styles.overlay}>
            <ScrollView>
            <View onpRe style={styles.cardPoke}>
              <Text style={styles.titlePokedex}>{pokeItem.name}</Text>
              <Image style={{marginTop:12, width:300, height: 300}} source={{uri: pokeItem.sprites.front_shiny}} />
              <Text style={styles.namePokemon}>Weight : {pokeItem.weight} </Text>
              <Text style={styles.namePokemon}>Height : {pokeItem.height} </Text>
              <Text style={styles.namePokemon}>Abilities : </Text>
               {pokeItem.abilities.map((abi)=>{
                return(
                 <Text > - {abi.ability.name} </Text>
                )
               })}
                <View style={{flexDirection:'row'}}>
                    {pokeItem.types.map((tipe, index) => {
                          return <Text style={styles.typePokemon}>{tipe.type.name}</Text>
                        })}
                  </View>
            </View>
              
            </ScrollView>

            </View>
          </Modal>
     </SafeAreaView> 
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E6AB09',
      paddingTop:50,
      paddingHorizontal:16,
      alignItems:'center'
    },
    titlePokedex: {
      fontSize:25,
      alignSelf:'center',
      fontWeight:'bold'
    },
    descPokedex: {
      marginTop:10,
      alignSelf:'center',
      fontSize:20,
    },
    cardPoke: {
      backgroundColor: '#fff',
      padding:20,
      marginTop:32,
      borderRadius:15
    },
    namePokemon: {
      fontSize:18,
      fontWeight:'bold'
    },
    typePokemon: {
      marginTop:8,
      marginLeft:8,
      fontSize:16,
      color:'#fff',
      padding:8,
      borderRadius:10,
      width: 80,
      backgroundColor:'#01B956'
  },
  overlay: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius:50,
    marginBottom:-35,
    paddingTop:16,
    paddingHorizontal:16,
    paddingBottom:30
  },
 
});

export default Pokedex;