import { AntDesign, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import jacket5 from './assets/jacket5.jpeg';

const Details = () => {
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
            <View style={styles.img}>
            <Image source={jacket5} style={styles.image}/>
            <View style={styles.iconContainer1}>
            <AntDesign name="hearto" size={24} color="#5100ad" style={styles.icon3} />
            </View>
           
            </View>
            <View style={styles.Details}>
                <Text style={styles.name}>Red Woman Jacket</Text>
                <Text style={{marginLeft:20}}>Review: ⭐⭐⭐⭐</Text>
                <View style={styles.line}></View>
                <Text style={{marginLeft:20}}>Nullam a nulla facilisis,consequat lacus in, consectetur ligula Nullam  consequat lacus in, consectetur ligula </Text>
                <View style={styles.material}>
                    <Text style={styles.materialText} >Material 90% polyester 9% elastane</Text>
                </View>
                <View style={styles.size}>
                <View style={styles.sizes}><Text style={{textAlign:'center',fontWeight:'bold'}} >XS</Text></View>
                <View style={styles.sizes}><Text style={{textAlign:'center',fontWeight:'bold'}}>S</Text></View>
                <View style={styles.sizes1}><Text style={styles.bold} >ML</Text></View>
                <View style={styles.sizes}><Text style={{textAlign:'center',fontWeight:'bold'}}>L</Text></View>
                <View style={styles.sizes}><Text style={{textAlign:'center',fontWeight:'bold'}}>XL</Text></View>
                </View>
                <View style={styles.addtocart}>
                    <View style={styles.amount}>
                        <Text style={{color:'white'}} >Total Amount</Text>
                        <Text style={styles.price}>$110</Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} >Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#ebedf0',
        
    },
    iconContainer1: {
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius:100,
        height:40,
        width:40,
        marginLeft:10,
    },
    iconContainer: {
        flexDirection: 'row',
        backgroundColor: '#ebedf0',
        padding: 10,
    },
    icon3:{
        alignSelf:'center'
    },
    img:{
        flexDirection:'row',
        alignSelf:'center',
    },
    image:{
        width:270,
        height:300,
        marginHorizontal:35,
        alignContent:'center',
        borderRadius:50,
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
    Details:{
        marginTop:20,
    },
    name:{
        fontSize:22,
        fontWeight:'bold',
        marginLeft:20,
    },
    line:{
        backgroundColor:'#4376e6',
        height:5,
        width:50,
        marginVertical:10,
        margin:20,
    },
    material:{
        backgroundColor:'white',
        height:60,
        justifyContent:'center',
        marginVertical:20,
    },
    materialText:{
        color:'#608be6',
        marginLeft:20,
        
    },
    size:{
        flexDirection:'row',
        marginLeft:10,
    },
    sizes:{
        marginHorizontal:10,
        height:40,
        width:40,
        backgroundColor:'white',
        borderRadius:5,
        justifyContent:'center'
    },
    sizes1:{
        marginHorizontal:10,
        height:40,
        width:40,
        backgroundColor:'#4376e6',
        borderRadius:5,
        justifyContent:'center',
        color:'white'
    },
    bold:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
    },
    addtocart:{
        marginVertical:20,
        backgroundColor:'#6e92e0',
        flexDirection:'row',
        height:80,
        marginHorizontal:20,
        borderRadius:15,
    },
    amount:{
        marginLeft:20,
        justifyContent:'center'
    },
    price:{
        fontSize:30,
        fontWeight:'bold',
        color:'white'
    },
    button:{
        backgroundColor:'#1351d6',
        height:50,
        width:130,
        borderRadius:10,
        marginTop:17,
        marginLeft:120,
        justifyContent:'center'
    },
    buttonText:{
        textAlign:'center',
        color:'white',
        fontSize:18,
        fontWeight:'bold'

    }
});

export default Details;
