import {ApolloProvider} from '@apollo/client';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {client} from './apollo/client';
import {CharacterList} from './features/character/components/character-list';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ApolloProvider client={client}>
        <CharacterList />
      </ApolloProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});
