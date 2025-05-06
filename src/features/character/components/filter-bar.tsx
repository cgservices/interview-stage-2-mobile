import type React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

type FilterBarProps = {
  name: string;
  setName: (name: string) => void;
};

export const FilterBar: React.FC<FilterBarProps> = ({name, setName}) => (
  <View style={styles.wrapper}>
    <TextInput
      placeholder="Filter by name (e.g., Rick)"
      value={name}
      onChangeText={setName}
      style={styles.input}
    />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {padding: 12, backgroundColor: '#fafafa'},
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
