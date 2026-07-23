import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { C, Display, PrimaryButton, Screen } from '@/src/ui';

export default function Profile() {
  const router = useRouter();
  return <Screen>
    <Display size={31}>Profiel</Display>
    <View style={styles.hero}><View style={styles.avatar}><Text style={styles.initial}>T</Text></View><View><Text style={styles.name}>Jouw profiel</Text><Text style={styles.verified}>✓ Geverifieerd profiel</Text></View></View>
    <View style={styles.stats}><View><Text style={styles.stat}>4,9</Text><Text style={styles.label}>rating</Text></View><View><Text style={styles.stat}>12</Text><Text style={styles.label}>plannen</Text></View><View><Text style={styles.stat}>8</Text><Text style={styles.label}>bookings</Text></View></View>
    <Text style={styles.section}>Jouw LastMinute</Text>
    {['Mijn requests', 'Mijn bookings', 'Reviews & vertrouwen', 'Betaalmethoden'].map((x) => <Pressable key={x} style={styles.item}><Text style={styles.itemText}>{x}</Text><Text>›</Text></Pressable>)}
    <Text style={styles.section}>Veiligheid</Text>
    <Pressable onPress={() => router.push('/safety')} style={[styles.item, { backgroundColor: C.oliveSoft }]}><Text style={styles.itemText}>Veiligheidscentrum</Text><Text>›</Text></Pressable>
    <PrimaryButton label="Nieuw request plaatsen" onPress={() => router.push('/request')} />
  </Screen>;
}

const styles = StyleSheet.create({ hero: { flexDirection: 'row', alignItems: 'center', gap: 14, marginTop: 24 }, avatar: { width: 70, height: 70, borderRadius: 35, backgroundColor: C.ink, alignItems: 'center', justifyContent: 'center' }, initial: { color: C.white, fontSize: 26, fontWeight: '900' }, name: { fontSize: 21, fontWeight: '900' }, verified: { color: C.green, fontSize: 12, fontWeight: '800', marginTop: 4 }, stats: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 24, borderTopWidth: 1, borderBottomWidth: 1, borderColor: C.line, paddingVertical: 16 }, stat: { fontSize: 20, fontWeight: '900', textAlign: 'center' }, label: { color: C.muted, fontSize: 10, textTransform: 'uppercase' }, section: { fontSize: 13, fontWeight: '900', marginTop: 26, marginBottom: 8, textTransform: 'uppercase' }, item: { minHeight: 50, paddingHorizontal: 13, borderWidth: 1, borderColor: C.line, backgroundColor: C.white, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 7, borderRadius: 7 }, itemText: { fontWeight: '800', fontSize: 13 } });
