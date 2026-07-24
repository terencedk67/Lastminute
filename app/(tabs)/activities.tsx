import { useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { activities } from '@/src/data';
import { C, Display, Pill, Screen } from '@/src/ui';

const filters = ['Alles', 'Cinema', 'Padel', 'Drinks', 'Live muziek'] as const;

type Filter = (typeof filters)[number];

export default function Activities() {
  const router = useRouter();
  const [filter, setFilter] = useState<Filter>('Alles');
  const visible = useMemo(() => activities.filter((a) => {
    if (filter === 'Alles') return true;
    const haystack = `${a.title} ${a.venue}`.toLowerCase();
    if (filter === 'Cinema') return haystack.includes('film') || haystack.includes('pathé');
    if (filter === 'Padel') return haystack.includes('padel');
    if (filter === 'Drinks') return haystack.includes('drink') || haystack.includes('café');
    return haystack.includes('live') || haystack.includes('muziek') || haystack.includes('tolhuistuin');
  }), [filter]);

  return <Screen>
    <View style={styles.head}>
      <View><Text style={styles.kicker}>NU & STRAKS</Text><Display size={34}>Activiteiten</Display></View>
      <Pressable style={styles.filterButton}><Text style={styles.filter}>☷</Text></Pressable>
    </View>
    <Text style={styles.intro}>Ontdek wat er de komende uren gebeurt. Geen plannen voor later — alleen plekken waar je nu echt nog bij kunt zijn.</Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>
      {filters.map((item) => <Pressable key={item} onPress={() => setFilter(item)}><Pill active={filter === item}>{item}</Pill></Pressable>)}
    </ScrollView>

    <View style={styles.sectionRow}><Text style={styles.within}>Binnen 3 uur</Text><Text style={styles.live}>● LIVE BESCHIKBAAR</Text></View>
    <View style={{ gap: 10 }}>
      {visible.map((a) => <Pressable key={a.id} onPress={() => router.push(`/activity/${a.id}`)} style={({ pressed }) => [styles.card, pressed && { opacity: 0.82 }]}>
        <Image source={{ uri: a.image }} style={styles.image} />
        <View style={{ flex: 1 }}>
          <Text style={styles.time}>{a.in}</Text>
          <Text style={styles.title}>{a.title}</Text>
          <Text style={styles.venue}>{a.venue}</Text>
          <View style={styles.metaRow}><Text style={styles.distance}>⌖ {a.distance}</Text><Text style={styles.spots}>{a.spots}</Text></View>
        </View>
        <Text style={styles.chevron}>›</Text>
      </Pressable>)}
    </View>

    <View style={styles.promise}>
      <Text style={styles.promiseTitle}>ALLEEN ECHTE BESCHIKBAARHEID</Text>
      <Text style={styles.promiseText}>Zodra een activiteit vol zit of begint, verdwijnt hij automatisch uit deze lijst.</Text>
    </View>
  </Screen>;
}

const styles = StyleSheet.create({
  head: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  kicker: { color: C.red, fontSize: 9, fontWeight: '900', letterSpacing: 1.1, marginBottom: 3 },
  filterButton: { width: 38, height: 38, borderWidth: 1, borderColor: C.line, borderRadius: 19, alignItems: 'center', justifyContent: 'center' },
  filter: { fontSize: 21, fontWeight: '900' },
  intro: { color: C.muted, lineHeight: 19, marginTop: 10, maxWidth: 390 },
  chips: { gap: 7, paddingRight: 12, paddingTop: 18, paddingBottom: 3 },
  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 23, marginBottom: 11 },
  within: { fontSize: 17, fontWeight: '900' },
  live: { color: C.red, fontSize: 8, fontWeight: '900', letterSpacing: 0.8 },
  card: { flexDirection: 'row', minHeight: 102, padding: 9, backgroundColor: C.white, borderWidth: 1, borderColor: C.line, borderRadius: 8, gap: 12, alignItems: 'center' },
  image: { width: 82, height: 82, borderRadius: 5 },
  time: { color: C.red, fontSize: 9, fontWeight: '900', textTransform: 'uppercase' },
  title: { fontSize: 19, fontWeight: '900', marginTop: 2 },
  venue: { fontSize: 12, color: C.ink },
  metaRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  distance: { fontSize: 10, color: C.muted },
  spots: { color: C.green, fontSize: 10, fontWeight: '900' },
  chevron: { fontSize: 23, color: C.muted, marginLeft: 2 },
  promise: { marginTop: 18, borderTopWidth: 1, borderTopColor: C.line, paddingTop: 15 },
  promiseTitle: { fontSize: 9, fontWeight: '900', letterSpacing: 0.9 },
  promiseText: { color: C.muted, fontSize: 10, lineHeight: 15, marginTop: 4 },
});