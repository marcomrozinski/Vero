import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function KPIs() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Vero</Text>
        <Text style={styles.headerSub}>Alle Metrics</Text>
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Alle KPI'er</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  header: { backgroundColor: '#2563EB', padding: 16 },
  headerTitle: { color: 'white', fontSize: 20, fontWeight: '700' },
  headerSub: { color: 'rgba(255,255,255,0.8)', fontSize: 13 },
  content: { padding: 16 },
  sectionTitle: { fontSize: 17, fontWeight: '700', marginBottom: 12 },
});