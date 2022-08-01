import React from 'react'
import { View , Text, StyleSheet} from 'react-native';



const Detail = ({ navigation }) => {
    return (
     <View>
        <Text>Detail</Text>
     </View> 
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});


export default Detail;