import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const List = ({image,name,star1,price}) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.Image}/>
            <View style={styles.textContainer}>
                <Text style={styles.itemName}>{name}</Text>
                <View style={styles.starContainer}>
                    <Text style={styles.star}>{star1}</Text>
                </View>
                <Text style={styles.text}>{price}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical:20,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: "white",
        borderWidth:2
    },
    Image: {
        height: 110,
        width: 90,
        borderRadius: 10,
    },
    textContainer: {
        marginLeft: 10,
    },
    itemName: {
        fontWeight: 'bold',
    },
    starContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    star: {
        fontSize: 16,
    },
    text:{
        color:'#5100ad',
        fontSize:16,
    }
});

export default List;
