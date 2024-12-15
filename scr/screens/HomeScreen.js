import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const buahList = [
  { id: 1, name: 'Apel', description: 'Apel segar dan manis', price: 'Rp 10.000' },
  { id: 2, name: 'Pisang', description: 'Pisang manis dan lezat', price: 'Rp 8.000' },
  { id: 3, name: 'Jeruk', description: 'Jeruk segar dan asam manis', price: 'Rp 12.000' },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {buahList.map((buah) => (
        <Card key={buah.id} style={styles.card}>
          <Card.Content>
            <Title>{buah.name}</Title>
            <Paragraph>{buah.description}</Paragraph>
            <Paragraph>{buah.price}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Detail', { buahId: buah.id })}
            >
              Lihat Detail
            </Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  card: {
    marginBottom: 10,
  },
});
