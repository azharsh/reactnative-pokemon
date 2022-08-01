import React from 'react'
import { 
    View , 
    Text,
    StyleSheet, 
    Image,
    SafeAreaView,
    Button,
    Alert
} from 'react-native';


const Home = ({ navigation }) => {
    return (
     <SafeAreaView style={styles.container}>
        <Image style={{width:120, height:40}} source={require('../assets/poketitle.png')} />
        <View style={styles.imgCenter} >
        <Image source={require('../assets/pokehome.png')} />
        <Text style={styles.titleCenter}>All The Pokemon Data you ever need in one place</Text>
        <Text style={styles.descHome} >Thousan of data Compiled into one place</Text>
        <View  style={styles.buttonHome}>
        <Button
            title="Check Poke Dex"
            marginTop={16}
            paddingHorizontal={16}
            color='#E6AB09'
            onPress={() => navigation.navigate('Pokedex')}
        />
        </View>
        </View>
     </SafeAreaView> 
    );
};

const styles = StyleSheet.create({
    container: {
      paddingTop:70,
      paddingHorizontal:32,
      flex: 1,
      backgroundColor: '#fff',
    },
    imgCenter: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleCenter :{
        marginTop:32,
        fontSize:20,
        fontWeight:'bold'
    },
    descHome :{
        marginTop:10,
        fontSize:18
    },
    buttonHome : {
    borderRadius:10,
       marginTop:32,
       alignSelf:'baseline'
    }
});


export default Home;