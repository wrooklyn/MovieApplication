import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Card from './Card';
import PropTypes from 'prop-types';
const propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
};

class List extends React.PureComponent {
  render() {
    const {navigation, title, content} = this.props;
    return (
      <View style={styles.list}>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={content}
            renderItem={({item}) => (
              <Card item={item} navigation={navigation} />
            )}></FlatList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
    color: 'black',
    marginLeft: 5,
  },
  list: {
    marginTop: 40,
    marginLeft: 10,
  },
});

List.propTypes = propTypes;

export default List;
