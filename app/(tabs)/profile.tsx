import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { C, Display, PrimaryButton, Screen } from '@/src/ui';

const MenuItem = ({ label, meta, onPress, tone = 'plain' }: { label: string; meta?: string; onPress?: () => void; tone?: 'plain' | 'olive' }) => <Pressable onPress={onPress} style={[styles.item, tone === 'olive' && styles.itemOlive]}>
  <View><Text style={styles.itemText}>{label}</Text>{meta ? <Text style={styles.itemMeta}>{meta}</Text> : null}</View><Text style={styles.chevron}>›</Text>
</Pressable>;

export default function Profile() {
  const router = useRouter();
  return <Screen>
    <View style={styles.header}><View><Text style={styles.kicker}>JOUW LASTMINUTE</Text><Display size={34}>Profiel</Display></View><Text style={styles.settings}>⚙</Text></View>

    <View style={styles.hero}>
      <View style={styles.avatar}><Text style={styles.initial}>T</Text></View>
      <View style={{ flex: 1 }}><Text style={styles.name}>Jouw profiel</Text><Text style={styles.verified}>✓ Geverifieerd profiel</Text><Text style={styles.member}>Amsterdam · actief vandaag</Text></View>
      <View style={styles.score}><Text style={styles.scoreValue}>4,9</Text><Text style={styles.scoreLabel}>★</Text></View>
    </View>

    <View style={styles.stats}>
      <View><Text style={styles.stat}>12</Text><Text style={styles.label}>plannen</Text></View>
      <View><Text style={styles.stat}>8</Text><Text style={styles.label}>bookings</Text></View>
      <View><Text style={styles.stat}>4</Text><Text style={styles.label}>reviews</Text></View>
    </View>

    <View style={styles.trustCard}><Text style={styles.trustEyebrow}>VERTROUWEN</Text><Text style={styles.trustTitle}>Je profiel staat sterk</Text><Text style={styles.trustText}>Identiteit bevestigd · meldingen aan · veilig chatten actief</Text></View>

    <Text style={styles.section}>Jouw activiteit</Text>
    <MenuItem label="Mijn requests" meta="1 actief · 3 afgerond" />
    <MenuItem label="Mijn bookings" meta="Volgende: vandaag 11:00" />
    <MenuItem label="Mijn plannen" meta="Film vanavond om 20:30" />
    <MenuItem label="Reviews & vertrouwen" meta="4,9 gemiddelde beoordeling" />

    <Text style={styles.section}>Account & veiligheid</Text>
    <MenuItem label="Veiligheidscentrum" meta="Plan delen · melden · noodhulp" tone="olive" onPress={() => router.push('/safety')} />
    <MenuItem label="Betaalmethoden" />
    <MenuItem label="Notificaties" />

    <PrimaryButton label="Nieuw request plaatsen" onPress={() => router.push('/request')} />
  </Screen>;
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  kicker: { color: C.red, fontSize: 9, fontWeight: '900', letterSpacing: 1.1, marginBottom: 3 },
  settings: { fontSize: 21 },
  hero: { flexDirection: 'row', alignItems: 'center', gap: 14, marginTop: 22, paddingBottom: 18, borderBottomWidth: 1, borderBottomColor: C.line },
  avatar: { width: 70, height: 70, borderRadius: 35, backgroundColor: C.ink, alignItems: 'center', justifyContent: 'center' },
  initial: { color: C.white, fontSize: 26, fontWeight: '900' },
  name: { fontSize: 21, fontWeight: '900' }, verified: { color: C.green, fontSize: 12, fontWeight: '800', marginTop: 4 }, member: { color: C.muted, fontSize: 10, marginTop: 4 },
  score: { width: 48, height: 48, borderRadius: 24, backgroundColor: C.red, alignItems: 'center', justifyContent: 'center' }, scoreValue: { color: C.white, fontSize: 14, fontWeight: '900' }, scoreLabel: { color: C.white, fontSize: 9 },
  stats: { flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 1, borderBottomColor: C.line, paddingVertical: 16 }, stat: { fontSize: 20, fontWeight: '900', textAlign: 'center' }, label: { color: C.muted, fontSize: 9, textTransform: 'uppercase', fontWeight: '800' },
  trustCard: { marginTop: 18, padding: 14, backgroundColor: C.oliveSoft, borderRadius: 8 }, trustEyebrow: { fontSize: 8, fontWeight: '900', letterSpacing: 0.9, color: C.green }, trustTitle: { fontSize: 15, fontWeight: '900', marginTop: 3 }, trustText: { fontSize: 10, color: C.muted, marginTop: 4 },
  section: { fontSize: 12, fontWeight: '900', marginTop: 24, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 },
  item: { minHeight: 56, paddingHorizontal: 13, borderWidth: 1, borderColor: C.line, backgroundColor: C.white, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 7, borderRadius: 7 }, itemOlive: { backgroundColor: C.oliveSoft, borderColor: C.olive }, itemText: { fontWeight: '900', fontSize: 13 }, itemMeta: { fontSize: 9, color: C.muted, marginTop: 3 }, chevron: { fontSize: 20, color: C.muted },
});