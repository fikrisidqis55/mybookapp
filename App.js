import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import BookListScreen from './screens/BookListScreen';
import BookDetailScreen from './screens/BookDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=subject:fiction')
      .then(response => response.json())
      .then(data => {
        setBooks(data.items);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BookListScreen">
          {props => <BookListScreen {...props} books={books} loading={loading} />}
        </Stack.Screen>
        <Stack.Screen name="BookDetailScreen" component={BookDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
