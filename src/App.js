import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, FlatList} from 'react-native';
import UserCard from './components/UserCard/UserCard';
import axios from 'axios';
import style from './App.style';

function App() {
  const [productList, setProductList] = useState([]);
  async function fetchData() {
    const {data} = await axios.get('https://fakestoreapi.com/products');
    setProductList(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={style.safeAreaView}>
      <Text style={style.productText}>Product</Text>
      <FlatList
        data={productList}
        renderItem={({item}) => {
          return (
            <UserCard
              title={item.title}
              description={item.description}
              image={item.image}
              price={item.price}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

export default App;
