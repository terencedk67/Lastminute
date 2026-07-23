import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { people } from '@/src/data';
import { C, Display, Pill, Screen } from '@/src/ui';

export default function People() {
  const router = useRouter();
  return <Screen>
    <View style={styles.head}><Display size={31}>Mensen</Display><Text style={styles.filter}>☷</Text></View>
    <View style={styles.filters}><Pill tone="olive">Online & beschikbaar</Pill><Pill>Binnen 25 km</Pill></View>
    <Text style={styles.intro}>Ontmoet mensen met een plan. Geen eindeloos swipen: intentie, tijd en plek staan voorop.</Text>
    <View style={{ gap: 10, marginTop: 18 }}>
      {people.map((p) => <Pressable key={p.id} onPress={() => router.push(`/chat/${p.id}`)} style={styles.card}>
        <Image source={{ uri: p.image }} style={styles.avatar} />
        <View style={{ flex: 1 }}><Text style={styles.name}>{p.name}, {p.age} <Text style={styles.verify}>✓</Text></Text><Text style={styles.plan}>{p.plan}</Text><Text style={styles.when}>{p.when}</Text></View>
        <Text style={styles.distance}>{p.distance}</Text>
      </Pressable>)}
    </View>
  </Screen>;
}

const styles = StyleSheet.create({
  head: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, filter: { fontSize: 24, fontWeight: '900' }, filters: { flexDirection: 'row', gap: 7, marginTop: 12, flexWrap: 'wrap' }, intro: { color: C.muted, lineHeight: 19, marginTop: 18, maxWidth: 380 },
  card: { flexDirection: 'row', padding: 10, backgroundColor: C.white, borderWidth: 1, borderColor: C.line, borderRadius: 8, alignItems: 'center', gap: 11 }, avatar: { width: 62, height: 62, borderRadius: 31 }, name: { fontSize: 15, fontWeight: '900' }, verify: { color: C.green }, plan: { fontSize: 13, fontWeight: '800', marginTop: 3 }, when: { fontSize: 10, color: C.muted, marginTop: 4 }, distance: { alignSelf: 'flex-start', fontSize: 10, color: C.muted },
});
