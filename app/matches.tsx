import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { providers } from '@/src/data';
import { Brand, C, Display, Pill, Screen } from '@/src/ui';

export default function Matches() {
  const router = useRouter();
  return <Screen>
    <View style={styles.top}><Pressable onPress={() => router.back()}><Text style={styles.back}>‹</Text></Pressable><Brand compact /><View style={{ width: 24 }} /></View>
    <Display size={34}>Matches onderweg</Display>
    <Text style={styles.sub}>Aanbieders reageren nu op je request.</Text>
    <View style={styles.live}><View style={styles.dot} /><Text style={styles.liveText}>Live zoeken · 3 aanbieders reageerden</Text></View>
    <View style={{ gap: 10, marginTop: 18 }}>
      {providers.map((p, i) => <Pressable key={p.id} onPress={() => router.push(`/provider/${p.id}`)} style={styles.card}>
        <Image source={{ uri: p.image }} style={styles.avatar} />
        <View style={{ flex: 1 }}><View style={styles.nameRow}><Text style={styles.name}>{p.name}</Text>{p.fast && <Pill tone="olive">Reageert snel</Pill>}</View><Text style={styles.role}>{p.role}</Text><Text style={styles.meta}>★ {p.rating} · {p.distance} bij jou vandaan</Text></View>
        <View style={{ alignItems: 'flex-end' }}><Text style={styles.seconds}>{12 + i * 16}s</Text><Text style={styles.price}>€{p.price}</Text></View>
      </Pressable>)}
    </View>
    <View style={styles.more}><Text style={styles.spinner}>◌</Text><View><Text style={styles.moreTitle}>Meer aanbieders worden benaderd...</Text><Text style={styles.moreSub}>Je request verloopt automatisch.</Text></View></View>
  </Screen>;
}

const styles = StyleSheet.create({ top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25 }, back: { fontSize: 32 }, sub: { color: C.muted, marginTop: 6 }, live: { flexDirection: 'row', alignItems: 'center', marginTop: 18, gap: 8 }, dot: { width: 9, height: 9, borderRadius: 5, backgroundColor: C.red }, liveText: { fontSize: 11, fontWeight: '800' }, card: { flexDirection: 'row', gap: 11, borderWidth: 1, borderColor: C.line, backgroundColor: C.white, borderRadius: 8, padding: 10, alignItems: 'center' }, avatar: { width: 58, height: 58, borderRadius: 29 }, nameRow: { flexDirection: 'row', alignItems: 'center', gap: 7 }, name: { fontWeight: '900', fontSize: 15 }, role: { fontSize: 11, color: C.ink, marginTop: 2 }, meta: { fontSize: 10, color: C.muted, marginTop: 5 }, seconds: { color: C.green, fontSize: 10, fontWeight: '800' }, price: { fontWeight: '900', marginTop: 8 }, more: { marginTop: 16, padding: 15, borderWidth: 1, borderColor: C.olive, backgroundColor: C.oliveSoft, borderRadius: 8, flexDirection: 'row', alignItems: 'center', gap: 12 }, spinner: { fontSize: 26 }, moreTitle: { fontSize: 12, fontWeight: '900' }, moreSub: { fontSize: 10, color: C.muted, marginTop: 2 } });
