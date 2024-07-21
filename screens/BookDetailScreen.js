import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';

const BookDetailScreen = ({ route }) => {
  const { book } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: book.volumeInfo.imageLinks.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{book.volumeInfo.title}</Text>
      <Text style={styles.author}>{book.volumeInfo.authors.join(', ')}</Text>
      <Text style={styles.description}>{book.volumeInfo.description}</Text>
      <Button title="Beli" onPress={() => { /* Logic untuk membeli buku */ }} />
      <Button title="Share" onPress={() => { /* Logic untuk berbagi buku */ }} />
      <Button title="Lihat di Peta" onPress={() => { /* Logic untuk melihat lokasi buku */ }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 24,
    marginVertical: 10,
  },
  author: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default BookDetailScreen;
