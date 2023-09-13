import React from 'react';
import { FlatList, View } from 'react-native';
import List from './List';
import jacket from './assets/jacket.jpeg';
import jacket1 from './assets/jacket1.jpeg';
import jacket2 from './assets/jacket2.jpeg';
import jacket3 from './assets/jacket3.jpeg';
import jacket4 from './assets/jacket4.jpeg';
import jacket5 from './assets/jacket5.jpeg';


const Items = () => {
    const goods =[
       {image:jacket1,name: 'Bike Jacket Software Warm', star1:'⭐⭐⭐⭐☆',price:'$99'},
        {image:jacket2,name: 'Overcoat', star1:'⭐⭐⭐☆☆',price:'$29'},
        {image:jacket,name: 'Leather jacket', star1:'⭐⭐⭐⭐☆',price:'$80'},
        {image:jacket3,name: 'Puffer jacket', star1:'⭐⭐⭐⭐☆',price:'$72'},
        {image:jacket4,name: 'Trench coat', star1:'⭐⭐⭐☆☆',price:'$67'},
        {image:jacket5,name: 'Frock coat', star1:'⭐⭐☆☆☆',price:'$79'},
        {image:jacket,name: 'Windbreaker', star1:'⭐⭐⭐☆☆',price:'$25'},
        {image:jacket3,name: 'Fleece jacket', star1:'⭐⭐⭐⭐☆',price:'$92'},
        {image:jacket4,name: 'Nehru jacket', star1:'⭐⭐⭐⭐☆',price:'$89'},
        {image:jacket5,name: 'Cardigan', star1:'⭐⭐⭐☆☆',price:'$102'},
        {image:jacket1,name: 'Norfolk jacket', star1:'⭐⭐⭐☆☆',price:'$92'},
        {image:jacket2,name: 'Bike Jacket Software ', star1:'⭐⭐⭐⭐☆',price:'$88'},
        {image:jacket,name: 'Bike Jacket ', star1:'⭐⭐⭐☆☆',price:'$23'},
        {image:jacket3,name: 'M-1965 field jacket', star1:'⭐⭐⭐☆☆',price:'$95'},
    ]
    return (
        <View>
            <FlatList
                data={goods}
                renderItem={({ item }) => {
            return  <List image={item.image} name={item.name} star1={item.star1} price={item.price} />
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

export default Items;
