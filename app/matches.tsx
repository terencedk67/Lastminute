import { useEffect, useMemo, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { providers } from '@/src/data';
import { Brand, C, Display, Pill, Screen } from '@/src/ui';

export default function Matches() {
  const router = useRouter();
  const [visibleCount, setVisibleCount] = useState(1);
  const visibleProviders = useMemo(() => providers.slice(0, visibleCount), [visibleCount]);

  useEffect(() => {
    if (visibleCount >= providers.length) return;
    const timer = setTimeout(() => setVisibleCount((count) => Math.min(count + 1, providers.length)), 1700);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  return <Screen>
    <View style={styles.top}><Pressable onPress={() => router.back()}><Text style={styles.back}>‹</Text></Pressable><Brand compact /><View style={{ width: 24 }} /></View>
    <Display size={34}>Matches onderweg</Display>
    <Text style={styles.sub}>Aanbieders reageren nu live op je request.</Text>

    <View style={styles.requestCard}>
      <Text style={styles.requestLabel}>JOUW REQUEST</Text>
      <Text style={styles.requestText}>Haar knippen binnen 30 minuten</Text>
      <Text style={styles.requestMeta}>3 km · budget €40 · nu actief</Text>
    </View>

    <View style={styles.live}><View style={styles.dot} /><Text style={styles.liveText}>LIVE · {visibleCount} {visibleCount === 1 ? 'AANBIEDER' : 'AANBIEDERS'} GEVONDEN</Text></View>

    <View style={{ gap: 10, marginTop: 18 }}>
      {visibleProviders.map((p, i) => <Pressable key={p.id} onPress={() => router.push(`/provider/${p.id}`)} style={({ pressed }) => [styles.card, pressed && { opacity: 0.78 }]}>
        <Image source={{ uri: p.image }} style={styles.avatar} />
        <View style={{ flex: 1 }}><View style={styles.nameRow}><Text style={styles.name}>{p.name}</Text>{p.fast && <Pill tone="olive">Snel</Pill>}</View><Text style={styles.role}>{p.role}</Text><Text style={styles.meta}>★ {p.rating} · {p.distance} bij jou vandaan</Text></View>
        <View style={{ alignItems: 'flex-end' }}><Text style={styles.seconds}>{12 + i * 16}s</Text><Text style={styles.price}>€{p.price}</Text><Text style={styles.view}>BEKIJK ›</Text></View>
      </Pressable>)}
    </View>

    {visibleCount < providers.length ? <View style={styles.more}><Text style={styles.spinner}>◌</Text><View style={{ flex: 1 }}><Text style={styles.moreTitle}>Meer aanbieders worden benaderd...</Text><Text style={styles.moreSub}>Nieuwe matches verschijnen hier automatisch.</Text></View></View> : <View style={styles.done}><Text style={styles.doneTitle}>Beste matches gevonden</Text><Text style={styles.doneText}>Kies een aanbieder om beschikbare tijden te bekijken en direct te boeken.</Text></View>}
  </Screen>;
}

const styles = StyleSheet.create({
  top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25 },
  back: { fontSize: 32 },
  sub: { color: C.muted, marginTop: 6 },
  requestCard: { marginTop: 18, padding: 15, backgroundColor: C.ink, borderRadius: 8 },
  requestLabel: { color: C.paper, opacity: 0.68, fontSize: 9, fontWeight: '900', letterSpacing: 1 },
  requestText: { color: C.white, fontSize: 16, fontWeight: '900', marginTop: 6 },
  requestMeta: { color: C.paper, opacity: 0.72, fontSize: 10, marginTop: 5 },
  live: { flexDirection: 'row', alignItems: 'center', marginTop: 18, gap: 8 },
  dot: { width: 9, height: 9, borderRadius: 5, backgroundColor: C.red },
  liveText: { fontSize: 10, fontWeight: '900', letterSpacing: 0.6 },
  card: { flexDirection: 'row', gap: 11, borderWidth: 1, borderColor: C.line, backgroundColor: C.white, borderRadius: 8, padding: 10, alignItems: 'center' },
  avatar: { width: 58, height: 58, borderRadius: 29 },
  nameRow: { flexDirection: 'row', alignItems: 'center', gap: 7 },
  name: { fontWeight: '900', fontSize: 15 },
  role: { fontSize: 11, color: C.ink, marginTop: 2 },
  meta: { fontSize: 10, color: C.muted, marginTop: 5 },
  seconds: { color: C.green, fontSize: 10, fontWeight: '800' },
  price: { fontWeight: '900', fontSize: 17, marginTop: 6 },
  view: { color: C.red, fontSize: 8, fontWeight: '900', marginTop: 4 },
  more: { marginTop: 16, padding: 15, borderWidth: 1, borderColor: C.olive, backgroundColor: C.oliveSoft, borderRadius: 8, flexDirection: 'row', alignItems: 'center', gap: 12 },
  spinner: { fontSize: 26 },
  moreTitle: { fontSize: 12, fontWeight: '900' },
  moreSub: { fontSize: 10, color: C.muted, marginTop: 2 },
  done: { marginTop: 16, padding: 15, borderWidth: 1, borderColor: C.line, borderRadius: 8 },
  doneTitle: { fontSize: 12, fontWeight: '900' },
  doneText: { fontSize: 10, lineHeight: 15, color: C.muted, marginTop: 4 },
});