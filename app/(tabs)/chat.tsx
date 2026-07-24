import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { people } from '@/src/data';
import { C, Display, Screen } from '@/src/ui';

export default function ChatList() {
  const router = useRouter();
  return <Screen>
    <View style={styles.head}>
      <View><Text style={styles.kicker}>JOUW PLANNEN</Text><Display size={34}>Chat</Display></View>
      <View style={styles.secure}><Text style={styles.secureIcon}>✓</Text><Text style={styles.secureText}>IN-APP</Text></View>
    </View>
    <Text style={styles.sub}>Alle gesprekken horen bij een concreet plan, request of booking.</Text>

    <View style={styles.planCard}>
      <Text style={styles.planEyebrow}>VANDAAG · 20:30</Text>
      <Text style={styles.planTitle}>Film · Pathé De Munt</Text>
      <Text style={styles.planMeta}>3 mensen gaan · 2,1 km van jou</Text>
    </View>

    <Text style={styles.section}>Berichten</Text>
    <View style={{ gap: 0 }}>
      {people.slice(0, 4).map((p, i) => <Pressable key={p.id} onPress={() => router.push(`/chat/${p.id}`)} style={({ pressed }) => [styles.row, pressed && { opacity: 0.75 }]}>
        <View style={styles.avatarWrap}><Image source={{ uri: p.image }} style={styles.avatar} /><View style={styles.online} /></View>
        <View style={{ flex: 1 }}>
          <View style={styles.nameLine}><Text style={styles.name}>{p.name}</Text>{i === 0 && <Text style={styles.planBadge}>FILM</Text>}</View>
          <Text numberOfLines={1} style={[styles.message, i === 0 && styles.messageUnread]}>{i === 0 ? 'Goed plan! Ik ben er rond 20:15.' : i === 1 ? 'Zullen we een baan reserveren?' : i === 2 ? 'Ik ben over een uurtje klaar.' : 'Zullen we bij de ingang afspreken?'}</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}><Text style={styles.time}>{18 + i}:2{i}</Text>{i === 0 && <View style={styles.unread}><Text style={styles.unreadText}>1</Text></View>}</View>
      </Pressable>)}
    </View>

    <View style={styles.safety}>
      <Text style={styles.safetyTitle}>CHAT VEILIG IN LASTMINUTE</Text>
      <Text style={styles.safetyText}>Je hoeft geen telefoonnummer of socials te delen. Blokkeren en melden blijft altijd beschikbaar.</Text>
    </View>
  </Screen>;
}

const styles = StyleSheet.create({
  head: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  kicker: { color: C.red, fontSize: 9, fontWeight: '900', letterSpacing: 1.1, marginBottom: 3 },
  secure: { flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: C.oliveSoft, paddingHorizontal: 9, paddingVertical: 7, borderRadius: 14 },
  secureIcon: { color: C.green, fontWeight: '900' }, secureText: { fontSize: 8, fontWeight: '900' },
  sub: { color: C.muted, marginTop: 8, lineHeight: 18 },
  planCard: { marginTop: 18, backgroundColor: C.ink, borderRadius: 8, padding: 15 },
  planEyebrow: { color: '#F0B4AE', fontSize: 9, fontWeight: '900', letterSpacing: 0.8 },
  planTitle: { color: C.white, fontSize: 18, fontWeight: '900', marginTop: 3 },
  planMeta: { color: '#D7D2CA', fontSize: 10, marginTop: 5 },
  section: { fontSize: 13, fontWeight: '900', textTransform: 'uppercase', marginTop: 24, marginBottom: 6 },
  row: { flexDirection: 'row', gap: 11, alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: C.line },
  avatarWrap: { position: 'relative' }, avatar: { width: 50, height: 50, borderRadius: 25 }, online: { position: 'absolute', right: 1, bottom: 2, width: 10, height: 10, borderRadius: 5, backgroundColor: C.green, borderWidth: 2, borderColor: C.paper },
  nameLine: { flexDirection: 'row', gap: 7, alignItems: 'center' }, name: { fontWeight: '900', fontSize: 14 }, planBadge: { color: C.red, fontSize: 8, fontWeight: '900' },
  message: { fontSize: 12, color: C.muted, marginTop: 4 }, messageUnread: { color: C.ink, fontWeight: '800' },
  time: { fontSize: 10, color: C.muted }, unread: { backgroundColor: C.red, width: 19, height: 19, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: 6 }, unreadText: { color: C.white, fontSize: 10, fontWeight: '900' },
  safety: { marginTop: 18, borderTopWidth: 1, borderTopColor: C.line, paddingTop: 14 }, safetyTitle: { fontSize: 9, fontWeight: '900', letterSpacing: 0.8 }, safetyText: { color: C.muted, fontSize: 10, lineHeight: 15, marginTop: 4 },
});