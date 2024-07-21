import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import BookList from '../components/BookList';

const BookListScreen = ({ books, loading, navigation }) => {
  const handleItemPress = (item) => {
    navigation.navigate('BookDetailScreen', { book: item });
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <BookList books={books} onItemPress={handleItemPress} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BookListScreen;
