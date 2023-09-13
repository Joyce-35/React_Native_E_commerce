import { AntDesign, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Items from './Items';

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <View style={styles.my}>
                <Ionicons name="arrow-back" size={24} color="black" style={styles.icon1}/>
                </View>
                <View style={styles.spacer} />
                <View style={styles.my}>
                <AntDesign name="shoppingcart" size={24} color="black" style={styles.icon2}/>
                </View>
            </View>
            <Text style={styles.item}>Woman Jacket</Text>
            <TextInput
                placeholder='Search Jacket'
                style={styles.input}
                prefix="Filter"
            />
            <ScrollView>
            <View style={styles.itemCon}>
                <Items />
            </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#ebedf0',
    },
    iconContainer: {
        flexDirection: 'row',
        backgroundColor: '#ebedf0',
        padding: 10,
    },
    my:{
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius:100,
        height:40,
        width:40,
    },
    icon1: {
   marginLeft:10,
   
    },
    spacer: {
        flex: 1,
    },
    icon2: {
        marginLeft: 8,
    color: "#5100ad",
        
    },
    item:{
        textAlign: 'left',
        marginLeft: 10,
        marginTop: 20,
        fontWeight:'bold',
        fontSize:25,
        marginBottom:20,
    },
    input:{
        backgroundColor:'white',
        marginHorizontal:15,
        borderRadius:10,
        height:50,
        paddingHorizontal:10,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical:20,
    },
    itemCon:{
        flex:1,
        width:"92%",
        alignSelf:'center',
    }
});

export default MainScreen;

