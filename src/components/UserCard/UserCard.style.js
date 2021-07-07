import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    margin: 5,
    padding: 10,
    borderRadius: 5,
    borderTopLeftRadius: 55,
    borderBottomLeftRadius: 55,
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
  },
  username: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  product_container: {
    flexDirection: 'row',
  },
  product_image: {
    borderRadius: 50,
    width: 80,
    height: 80,
  },
  price_container: {
    flex: 1,
    alignItems: 'flex-end',
    color: 'red',
  },
  price_text: {
    color: 'darkred',
    fontWeight: 'bold',
    fontSize: 25,
  },
  description_text: {
    fontSize: 20,
  },
});
