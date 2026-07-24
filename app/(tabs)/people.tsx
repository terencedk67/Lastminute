import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { people } from '@/src/data';
import { C, Display, Pill, Screen } from '@/src/ui';

export default function People() {
  const router = useRouter();
  const [availableOnly, setAvailableOnly] = useState(true);
  return <Screen>
    <View style={styles.head}>
      <View><Text style={styles.kicker}>MENSEN MET EEN PLAN</Text><Display size={34}>Mensen</Display></View>
      <Pressable style={styles.filterButton}><Text style={styles.filter}>☷</Text></Pressable>
    </View>
    <Text style={styles.intro}>Geen eindeloos swipen. Je ziet wie er beschikbaar is, wat iemand wil doen en wanneer het plan plaatsvindt.</Text>

    <View style={styles.filters}>
      <Pressable onPress={() => setAvailableOnly((v) => !v)}><Pill tone={availableOnly ? 'olive' : 'plain'}>● Online & beschikbaar</Pill></Pressable>
      <Pill>Binnen 25 km</Pill>
    </View>

    <View style={styles.safetyLine}><Text style={styles.safetyText}>✓ Geverifieerde profielen</Text><Text style={styles.safetyText}>⌖ Duidelijke intentie</Text></View>

    <View style={{ gap: 10, marginTop: 16 }}>
      {people.map((p, index) => <Pressable key={p.id} onPress={() => router.push(`/chat/${p.id}`)} style={({ pressed }) => [styles.card, pressed && { opacity: 0.82 }]}>
        <View style={styles.avatarWrap}>
          <Image source={{ uri: p.image }} style={styles.avatar} />
          {availableOnly && <View style={styles.onlineDot} />}
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.nameRow}><Text style={styles.name}>{p.name}, {p.age}</Text><Text style={styles.verify}>✓</Text></View>
          <Text style={styles.plan}>{p.plan}</Text>
          <Text style={styles.when}>{p.when}</Text>
        </View>
        <View style={styles.right}><Text style={styles.distance}>{p.distance}</Text><Text style={styles.cta}>{index === 0 ? 'GA OOK' : 'CHAT'} ›</Text></View>
      </Pressable>)}
    </View>

    <View style={styles.note}>
      <Text style={styles.noteTitle}>LASTMINUTE IS GEEN DATING-APP</Text>
      <Text style={styles.noteText}>Het plan staat centraal. Jij bepaalt altijd met wie je praat, waar je afspreekt en welke gegevens je deelt.</Text>
    </View>
  </Screen>;
}

const styles = StyleSheet.create({
  head: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  kicker: { color: C.red, fontSize: 9, fontWeight: '900', letterSpacing: 1.1, marginBottom: 3 },
  filterButton: { width: 38, height: 38, borderWidth: 1, borderColor: C.line, borderRadius: 19, alignItems: 'center', justifyContent: 'center' },
  filter: { fontSize: 21, fontWeight: '900' },
  filters: { flexDirection: 'row', gap: 7, marginTop: 16, flexWrap: 'wrap' },
  intro: { color: C.muted, lineHeight: 19, marginTop: 10, maxWidth: 390 },
  safetyLine: { flexDirection: 'row', gap: 14, marginTop: 17, paddingBottom: 12, borderBottomWidth: 1, borderBottomColor: C.line },
  safetyText: { fontSize: 9, color: C.muted, fontWeight: '800' },
  card: { flexDirection: 'row', padding: 10, backgroundColor: C.white, borderWidth: 1, borderColor: C.line, borderRadius: 8, alignItems: 'center', gap: 11 },
  avatarWrap: { position: 'relative' },
  avatar: { width: 64, height: 64, borderRadius: 32 },
  onlineDot: { position: 'absolute', right: 1, bottom: 3, width: 12, height: 12, borderRadius: 6, backgroundColor: C.green, borderWidth: 2, borderColor: C.white },
  nameRow: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  name: { fontSize: 15, fontWeight: '900' },
  verify: { color: C.green, fontWeight: '900' },
  plan: { fontSize: 13, fontWeight: '800', marginTop: 3 },
  when: { fontSize: 10, color: C.muted, marginTop: 5 },
  right: { alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'flex-end' },
  distance: { fontSize: 10, color: C.muted },
  cta: { fontSize: 9, color: C.red, fontWeight: '900' },
  note: { marginTop: 20, backgroundColor: C.oliveSoft, padding: 14, borderRadius: 8 },
  noteTitle: { fontSize: 9, fontWeight: '900', letterSpacing: 0.8 },
  noteText: { fontSize: 10, color: C.muted, lineHeight: 15, marginTop: 4 },
});