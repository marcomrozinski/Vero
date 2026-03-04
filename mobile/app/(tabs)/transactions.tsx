import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Transactions() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Vero</Text>
        <Text style={styles.headerSub}>Transaktioner</Text>
      </View>
      <View style={styles.emptyState}>
        <Text style={styles.emptyTitle}>Ingen transaktioner endnu</Text>
        <Text style={styles.emptySub}>Tryk på + knappen for at tilføje din første transaktion</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  header: { backgroundColor: '#2563EB', padding: 16 },
  headerTitle: { color: 'white', fontSize: 20, fontWeight: '700' },
  headerSub: { color: 'rgba(255,255,255,0.8)', fontSize: 13 },
  emptyState: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 40 },
  emptyTitle: { fontSize: 16, fontWeight: '700', marginBottom: 8, textAlign: 'center' },
  emptySub: { fontSize: 14, color: '#6B7280', textAlign: 'center' },
});