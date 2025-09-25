import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const livros = [
  { id: '1', titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', imagem: 'https://via.placeholder.com/150' },
  { id: '2', titulo: '1984', autor: 'George Orwell', imagem: 'https://via.placeholder.com/150' },
  { id: '3', titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', imagem: 'https://via.placeholder.com/150' },
  { id: '4', titulo: 'Dom Quixote', autor: 'Miguel de Cervantes', imagem: 'https://via.placeholder.com/150' },
];

export default function ListaLivros({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.autor}>{item.autor}</Text>
            <Button
              title="Ver Detalhes"
              onPress={() => navigation.navigate('Detalhes', { livro: item })}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: { marginBottom: 16, padding: 12, backgroundColor: '#f2f2f2', borderRadius: 8 },
  titulo: { fontSize: 18, fontWeight: 'bold' },
  autor: { fontSize: 14, color: '#555', marginBottom: 8 },
});
