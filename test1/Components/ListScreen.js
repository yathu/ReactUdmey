import React, { Component } from 'react';
import {View,Text,StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name:'friend 1'},
        {name:'friend 2'},
        {name:'friend 3'},
        {name:'friend 4'},
        {name:'friend 5'},
        {name:'friend 6'},
    ]
    return(
        <FlatList 
        data={friends}
        renderItem={({ item }) => {
        return <Text>{item.name}</Text>
        }}>
        </FlatList>
    );
}

const styles = StyleSheet.create({});

export default ListScreen;