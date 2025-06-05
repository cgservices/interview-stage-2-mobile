import type React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import type {
  GetCharactersQuery_characters_Characters_results_Character,
} from '../generated/get-characters';

interface Props {
	character: GetCharactersQuery_characters_Characters_results_Character
}

export const CharacterCard: React.FC<Props> = ({ character }) => (
	<View style={styles.card}>
    {character.image != null &&
		<Image source={{ uri: character.image }} style={styles.img} />}
		<View style={styles.meta}>
			<Text style={styles.name}>{character.name}</Text>
			<Text>{character.species}</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	card: { flexDirection: 'row', padding: 12, gap: 12, alignItems: 'center' },
	img: { width: 64, height: 64, borderRadius: 32 },
	meta: { flex: 1 },
	name: { fontWeight: '600', fontSize: 16 },
});
