import { Tabs } from 'expo-router';
import { Platform, Text } from 'react-native';
import { C } from '@/src/ui';

const icon = (symbol: string) => ({ color }: { color: string }) => <Text style={{ color, fontSize: 18, fontWeight: '900' }}>{symbol}</Text>;

export default function TabLayout() {
  return <Tabs initialRouteName="live" screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: C.red,
    tabBarInactiveTintColor: C.ink,
    tabBarLabelStyle: { fontSize: 9, fontWeight: '800', textTransform: 'uppercase', marginBottom: Platform.OS === 'ios' ? 0 : 6 },
    tabBarStyle: { height: Platform.OS === 'ios' ? 82 : 66, backgroundColor: C.paper, borderTopColor: C.line, borderTopWidth: 1, paddingTop: 7 },
  }}>
    <Tabs.Screen name="live" options={{ title: 'Live', tabBarIcon: icon('●') }} />
    <Tabs.Screen name="activities" options={{ title: 'Activiteiten', tabBarIcon: icon('≡') }} />
    <Tabs.Screen name="people" options={{ title: 'Mensen', tabBarIcon: icon('♟') }} />
    <Tabs.Screen name="chat" options={{ title: 'Chat', tabBarIcon: icon('◌') }} />
    <Tabs.Screen name="profile" options={{ title: 'Profiel', tabBarIcon: icon('◎') }} />
  </Tabs>;
}
