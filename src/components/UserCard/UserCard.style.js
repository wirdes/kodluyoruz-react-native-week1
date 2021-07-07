import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eceff9',
    margin: 5,
    padding: 10,
    borderRadius: 5,
    borderTopLeftRadius: 55,
    borderBottomLeftRadius: 55,
    borderWidth: 10,
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
    marginTop: 10,
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  price_container: {
    flex: 1,
    alignItems: 'flex-end',
    color: 'green',
  },
  price_text: {
    marginTop: 10,
    color: 'green',
    fontWeight: 'bold',
    fontSize: 20,
  },
  description_text: {
    fontSize: 15,
  },
});
