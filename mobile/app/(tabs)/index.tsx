import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const kpiCards = [
  { label: 'Revenue (Omsætning)', value: '$0.00', sub: 'Current month', color: '#2563EB' },
  { label: 'Gross Profit', value: '$0.00', sub: 'Revenue - Variable Costs', color: '#22C55E' },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Vero</Text>
        <Text style={styles.headerSub}>Dashboard</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Key Metrics</Text>

        {kpiCards.map((kpi, i) => (
          <View key={i} style={styles.kpiCard}>
            <View>
              <Text style={styles.kpiLabel}>{kpi.label}</Text>
              <Text style={styles.kpiValue}>{kpi.value}</Text>
              <Text style={styles.kpiSub}>{kpi.sub}</Text>
            </View>
            <View style={[styles.kpiIcon, { backgroundColor: kpi.color }]}>
              <Text style={styles.kpiIconText}>$</Text>
            </View>
          </View>
        ))}

        <View style={styles.tipCard}>
          <Text style={styles.tipIcon}>💡</Text>
          <View>
            <Text style={styles.tipTitle}>Tip</Text>
            <Text style={styles.tipText}>Gå til KPIs-siden og vælg dine favorit metrics ved at trykke på ⭐</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Monthly Progress (Vækst)</Text>
        <View style={styles.chartPlaceholder}>
          <Text style={styles.chartPlaceholderText}>Chart kommer snart</Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  header: { backgroundColor: '#2563EB', padding: 16 },
  headerTitle: { color: 'white', fontSize: 20, fontWeight: '700' },
  headerSub: { color: 'rgba(255,255,255,0.8)', fontSize: 13 },
  content: { padding: 16 },
  sectionTitle: { fontSize: 17, fontWeight: '700', marginBottom: 12, marginTop: 8 },
  kpiCard: {
    backgroundColor: 'white', borderRadius: 16, padding: 16,
    marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 2,
  },
  kpiLabel: { fontSize: 13, color: '#6B7280', marginBottom: 4 },
  kpiValue: { fontSize: 26, fontWeight: '700', color: '#111827' },
  kpiSub: { fontSize: 12, color: '#6B7280', marginTop: 4 },
  kpiIcon: {
    width: 48, height: 48, borderRadius: 14,
    alignItems: 'center', justifyContent: 'center',
  },
  kpiIconText: { color: 'white', fontSize: 20, fontWeight: '700' },
  tipCard: {
    backgroundColor: '#FFFBEB', borderRadius: 16, padding: 14,
    marginBottom: 16, flexDirection: 'row', gap: 10,
  },
  tipIcon: { fontSize: 18 },
  tipTitle: { fontSize: 13, fontWeight: '600', color: '#92400E' },
  tipText: { fontSize: 13, color: '#B45309', marginTop: 2 },
  chartPlaceholder: {
    backgroundColor: 'white', borderRadius: 16, padding: 40,
    alignItems: 'center', marginBottom: 20,
  },
  chartPlaceholderText: { color: '#6B7280' },
  fab: {
    position: 'absolute', bottom: 20, right: 20,
    width: 52, height: 52, borderRadius: 26,
    backgroundColor: '#2563EB', alignItems: 'center', justifyContent: 'center',
    shadowColor: '#2563EB', shadowOpacity: 0.4, shadowRadius: 8, elevation: 6,
  },
  fabText: { color: 'white', fontSize: 28, lineHeight: 32 },
});