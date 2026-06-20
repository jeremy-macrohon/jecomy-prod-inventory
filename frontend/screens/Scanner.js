import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Scanner({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scanner (placeholder)</Text>
      <Button title="Open Barcode Scanner" onPress={() => navigation.navigate('BarcodeScanner')} />
      <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 12 }
});
