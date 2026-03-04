import { Tabs } from 'expo-router';
import { House, TrendingUp, CreditCard } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#6B7280',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E5E7EB',
          height: 60,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <House size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="kpis"
        options={{
          title: 'KPIs',
          tabBarIcon: ({ color }) => <TrendingUp size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Transaktioner',
          tabBarIcon: ({ color }) => <CreditCard size={22} color={color} />,
        }}
      />
    </Tabs>
  );
}