import {NetworkStatus} from '@apollo/client';
import type React from 'react';
import {useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDebouncedCallback} from 'use-debounce';
import {useGetCharactersQuery} from '../generated/get-characters';
import {CharacterCard} from './character-card';
import {FilterBar} from './filter-bar';

export const CharacterList: React.FC = () => {
  const [input, setInput] = useState('');

  const debouncedSetFilter = useDebouncedCallback((text: string) => {
    setInput(text);
  }, 400);

  const onChangeName = (text: string) => {
    setInput(text);
    debouncedSetFilter(text);
  };

  const {data, error, networkStatus} = useGetCharactersQuery({
    variables: {name: input},
    notifyOnNetworkStatusChange: true,
  });

  return (
    <View style={styles.root}>
      <FilterBar name={input} setName={onChangeName} />

      {networkStatus === NetworkStatus.refetch && (
        <ActivityIndicator size="large" style={styles.spinner} />
      )}

      {error ? (
        <Text style={styles.err}>{error.message}</Text>
      ) : (
        <ScrollView keyboardShouldPersistTaps="handled">
          {data?.characters?.results?.filter(c => c != null).map(c => (
            <CharacterCard key={c.id} character={c} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1},
  spinner: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    marginTop: -20,
  },
  err: {padding: 16, color: 'red'},
});
