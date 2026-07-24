import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Brand, C, Display, Eyebrow, Screen, SectionTitle, TinyIcon, cardShadow } from '@/src/ui';
import { activities } from '@/src/data';

const Action = ({ icon, title, sub, tone, onPress }: { icon: string; title: string; sub: string; tone: 'plain' | 'olive' | 'red'; onPress: () => void }) => {
  const bg = tone === 'olive' ? C.olive : tone === 'red' ? C.red : C.paper;
  const fg = tone === 'plain' ? C.ink : C.white;
  return <Pressable onPress={onPress} style={({ pressed }) => [styles.action, { backgroundColor: bg, opacity: pressed ? 0.8 : 1 }]}>
    <Text style={[styles.actionIcon, { color: fg }]}>{icon}</Text>
    <View style={{ flex: 1 }}><Text style={[styles.actionTitle, { color: fg }]}>{title}</Text><Text style={[styles.actionSub, { color: fg }]}>{sub}</Text></View>
    <Text style={{ color: fg, fontSize: 20 }}>›</Text>
  </Pressable>;
};

export default function Live() {
  const router = useRouter();
  const film = activities[0];
  return <Screen>
    <View style={styles.header}><View><Brand /><Text style={styles.city}>Amsterdam⌄</Text></View><TinyIcon>◷</TinyIcon></View>
    <Display size={39}>Waar heb je{`\n`}nu zin in?</Display>
    <View style={{ gap: 9, marginTop: 18 }}>
      <Action icon="✂" title="Een dienst" sub="Schoonheid, klus, coaching en meer" tone="plain" onPress={() => router.push('/request')} />
      <Action icon="◇" title="Iets doen" sub="Activiteiten, uitjes, tickets en meer" tone="olive" onPress={() => router.push('/(tabs)/activities')} />
      <Action icon="♙" title="Iemand ontmoeten" sub="Nieuwe mensen in jouw buurt" tone="red" onPress={() => router.push('/(tabs)/people')} />
    </View>

    <SectionTitle right={<Text style={styles.link}>Volgende 3 uur</Text>}>LIVE BIJ JOU</SectionTitle>
    <View style={[styles.map, cardShadow]}>
      <View style={[styles.road, { width: 280, transform: [{ rotate: '17deg' }], top: 50, left: -20 }]} />
      <View style={[styles.road, { width: 260, transform: [{ rotate: '-28deg' }], top: 125, left: 70 }]} />
      <View style={[styles.road, { width: 230, transform: [{ rotate: '75deg' }], top: 110, left: 100 }]} />
      <View style={[styles.pin, { top: 42, left: 70, backgroundColor: C.ink }]}><Text style={styles.pinText}>♪</Text></View>
      <View style={[styles.pin, { top: 105, right: 55, backgroundColor: C.red }]}><Text style={styles.pinText}>◉</Text></View>
      <View style={[styles.pin, { bottom: 50, left: 145, backgroundColor: C.olive }]}><Text style={styles.pinText}>♨</Text></View>
      <View style={styles.me} />
    </View>

    <Pressable onPress={() => router.push(`/activity/${film.id}`)} style={styles.liveCard}>
      <View><Eyebrow>{film.in}</Eyebrow><Text style={styles.liveTitle}>{film.title}</Text><Text style={styles.meta}>{film.venue} · {film.distance}</Text></View>
      <View style={{ alignItems: 'flex-end' }}><Text style={styles.spots}>{film.spots}</Text><Text style={styles.avatars}>● ● ●</Text></View>
    </Pressable>

    <Pressable onPress={() => router.push('/request')} style={({ pressed }) => [styles.fab, { opacity: pressed ? 0.8 : 1 }]}>
      <Text style={styles.fabPlus}>＋</Text><Text style={styles.fabText}>REQUEST</Text>
    </Pressable>
  </Screen>;
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 },
  city: { fontSize: 13, marginTop: 2, color: C.ink, fontWeight: '700' },
  action: { minHeight: 76, borderWidth: 1, borderColor: C.line, borderRadius: 8, padding: 13, flexDirection: 'row', alignItems: 'center', gap: 13 },
  actionIcon: { width: 38, fontSize: 29, textAlign: 'center' },
  actionTitle: { fontFamily: 'System', fontWeight: '900', fontSize: 16, textTransform: 'uppercase' },
  actionSub: { fontSize: 10, marginTop: 2, opacity: 0.82 },
  link: { color: C.ink, fontSize: 11, fontWeight: '700' },
  map: { height: 230, borderRadius: 9, overflow: 'hidden', backgroundColor: '#E4DED2', borderWidth: 1, borderColor: C.line, position: 'relative' },
  road: { position: 'absolute', height: 13, backgroundColor: '#F8F6F0', borderWidth: 1, borderColor: '#D3CDC0' },
  pin: { position: 'absolute', width: 42, height: 42, borderRadius: 23, alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: C.white },
  pinText: { color: C.white, fontSize: 18, fontWeight: '900' },
  me: { position: 'absolute', width: 17, height: 17, borderRadius: 10, backgroundColor: '#287CF4', borderWidth: 3, borderColor: C.white, top: 112, left: 112 },
  liveCard: { marginTop: -1, borderWidth: 1, borderColor: C.line, borderRadius: 8, padding: 14, backgroundColor: C.paper, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  liveTitle: { fontFamily: 'System', fontWeight: '900', fontSize: 24, marginTop: 2 },
  meta: { color: C.muted, fontSize: 12, marginTop: 2 },
  spots: { color: C.green, fontSize: 12, fontWeight: '800' },
  avatars: { marginTop: 12, letterSpacing: -2 },
  fab: { position: 'absolute', right: 20, bottom: 28, backgroundColor: C.red, borderRadius: 28, height: 54, paddingHorizontal: 18, flexDirection: 'row', alignItems: 'center', gap: 6, ...cardShadow },
  fabPlus: { color: C.white, fontSize: 20 }, fabText: { color: C.white, fontSize: 11, fontWeight: '900' },
});
