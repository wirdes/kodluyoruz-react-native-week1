/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './UserCard.style';

const UserCard = ({title, description, image, price}) => {
  return (
    <View style={styles.container}>
      <View style={styles.product_container}>
        <Image
          style={styles.product_image}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.price_container}>
        <Text numberOfLines={1} style={styles.username}>
          {title.length < 50 ? `${title}` : `${title.substring(0, 32)}...`}
        </Text>
        <Text style={styles.description_text} numberOfLines={2}>
          {'  ' + description}
        </Text>
        <Text style={styles.price_text}>${price}</Text>
      </View>
    </View>
  );
};

export default UserCard;
