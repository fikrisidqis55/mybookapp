import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const BookList = ({ books, onItemPress }) => {
  return (
    <FlatList
      data={books}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onItemPress(item)}>
          <View style={styles.item}>
            <Image source={{ uri: item.volumeInfo.imageLinks.thumbnail }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.volumeInfo.title}</Text>
              <Text style={styles.author}>{item.volumeInfo.authors.join(', ')}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    color: '#666',
  },
});

export default BookList;
