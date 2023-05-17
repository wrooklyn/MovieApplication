import React from 'react';
import {Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

const defaultImage = require('../assets/images/default.png');

const propTypes = {
  item: PropTypes.object,
};

class Card extends React.PureComponent {
  render() {
    const {item, navigation} = this.props;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('Detail')}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={
            item.poster_path
              ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
              : defaultImage
          }
        />
        {!item.poster_path && (
          <Text style={styles.movieName}>{item.title}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative', //important for the child with absolute position
    alignItems: 'center',
    height: 200,
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  movieName: {
    position: 'absolute',
    textAlign: 'center',
    top: 20,
    fontSize: 12,
    color: 'black',
  },
});

Card.propTypes = propTypes;

export default Card;
