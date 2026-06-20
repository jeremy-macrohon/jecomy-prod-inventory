import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../AuthContext';
import { fetchInsights } from '../api';

export default function Insights() {
  const { token } = useContext(AuthContext);
  const [insights, setInsights] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchInsights(token);
        setInsights(data);
      } catch (e) {
        console.warn('Failed to load insights', e);
      }
    })();
  }, []);

  if (!insights) return <View style={styles.container}><Text>Loading...</Text></View>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Insights</Text>
      <Text>Total products: {insights.totalProducts}</Text>
      <Text>Total quantity: {insights.totalQuantity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 16 }, title: { fontSize: 20, fontWeight: '600', marginBottom: 12 } });
