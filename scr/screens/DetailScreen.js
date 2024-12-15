import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const buahDetail = {
  1: { name: 'Apel', description: 'Apel segar dan manis', price: 'Rp 10.000', info: 'Buah apel ini berasal dari dataran tinggi.' },
  2: { name: 'Pisang', description: 'Pisang manis dan lezat', price: 'Rp 8.000', info: 'Pisang ini cocok untuk dimakan langsung atau dibuat smoothie.' },
  3: { name: 'Jeruk', description: 'Jeruk segar dan asam manis', price: 'Rp 12.000', info: 'Jeruk ini kaya akan vitamin C dan sangat menyegarkan.' },
};

export default function DetailScreen({ route, navigation }) {
  const { buahId } = route.params;
  const buah = buahDetail[buahId];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{buah.name}</Text>
      <Text style={styles.description}>{buah.description}</Text>
      <Text style={styles.price}>{buah.price}</Text>
      <Text style={styles.info}>{buah.info}</Text>
      <Button mode="contained" onPress={() => navigation.goBack()} style={styles.button}>
        Kembali
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    color: 'green',
  },
  info: {
    marginVertical: 15,
    fontSize: 14,
    color: '#555',
  },
  button: {
    marginTop: 20,
  },
});
