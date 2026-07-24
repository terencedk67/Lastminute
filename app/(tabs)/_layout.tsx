import { Tabs } from 'expo-router';
import { Platform, Text, View, type ColorValue } from 'react-native';
import { C } from '@/src/ui';

const icon = (symbol: string) => ({ color, focused }: { color: ColorValue; focused: boolean }) => <View style={{ alignItems: 'center', justifyContent: 'center' }}>
  <Text style={{ color, fontSize: focused ? 19 : 18, fontWeight: '900', lineHeight: 21 }}>{symbol}</Text>
  {focused ? <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: C.red, marginTop: 2 }} /> : null}
</View>;

export default function TabLayout() {
  return <Tabs initialRouteName="live" screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: C.red,
    tabBarInactiveTintColor: C.ink,
    tabBarLabelStyle: { fontSize: 8, fontWeight: '900', textTransform: 'uppercase', letterSpacing: 0.2, marginBottom: Platform.OS === 'ios' ? 0 : 6 },
    tabBarStyle: { height: Platform.OS === 'ios' ? 84 : 68, backgroundColor: C.paper, borderTopColor: C.ink, borderTopWidth: 1, paddingTop: 7 },
    tabBarItemStyle: { paddingTop: 2 },
  }}>
    <Tabs.Screen name="live" options={{ title: 'Live', tabBarIcon: icon('⌖') }} />
    <Tabs.Screen name="activities" options={{ title: 'Activiteiten', tabBarIcon: icon('≡') }} />
    <Tabs.Screen name="people" options={{ title: 'Mensen', tabBarIcon: icon('♙') }} />
    <Tabs.Screen name="chat" options={{ title: 'Chat', tabBarIcon: icon('◯') }} />
    <Tabs.Screen name="profile" options={{ title: 'Profiel', tabBarIcon: icon('◎') }} />
  </Tabs>;
}