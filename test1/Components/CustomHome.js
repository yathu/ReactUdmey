import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

    const CustomHome = () => {

    const name = "yathavan";

    return (
        <View>
            <Text style={styles.title}>hi there</Text>
            <Text style={styles.subTitle}>My name is {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize:45,
        textAlign:"center",

    },
    subTitle:{
        fontSize:25,
        textAlign:"center",
        color:"#ff0000"
    }
})

export default CustomHome;