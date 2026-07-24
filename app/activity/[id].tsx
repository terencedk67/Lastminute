import { useState } from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { activities } from '@/src/data';
import { C, PrimaryButton, Screen } from '@/src/ui';

export default function ActivityDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const activity = activities.find((a) => a.id === id) ?? activities[0];
  const [joined, setJoined] = useState(false);

  return <Screen>
    <ImageBackground source={{ uri: activity.image }} style={styles.hero} imageStyle={{ resizeMode: 'cover' }}>
      <View style={styles.overlay} />
      <View style={styles.heroTop}><Pressable onPress={() => router.back()}><Text style={styles.back}>‹</Text></Pressable><Text style={styles.share}>⇧</Text></View>
      <View style={styles.heroText}><Text style={styles.time}>{activity.in}</Text><Text style={styles.title}>{activity.title}</Text><Text style={styles.venue}>{activity.venue}</Text></View>
    </ImageBackground>

    <View style={styles.card}>
      <View style={styles.row}><View><Text style={styles.label}>WANNEER</Text><Text style={styles.value}>Vandaag om 20:30</Text></View><Text style={styles.icon}>◷</Text></View>
      <View style={styles.line} />
      <View style={styles.row}><View style={{ flex: 1 }}><Text style={styles.label}>WAAR</Text><Text style={styles.value}>Vijzelstraat 15, Amsterdam</Text><Text style={styles.sub}>{activity.distance} van jou</Text></View><Text style={styles.icon}>⌖</Text></View>
      <View style={styles.line} />
      <View style={styles.row}><View><Text style={styles.label}>WIE GAAN ER MEE</Text><Text style={styles.value}>{joined ? 'Jij + 6 anderen' : '6 mensen gaan'}</Text></View><Text style={styles.avatars}>● ● ● +3</Text></View>
      <View style={styles.line} />
      <View style={styles.row}><View><Text style={styles.label}>BESCHIKBARE PLEKKEN</Text><Text style={styles.value}>{joined ? '1 plek over' : activity.spots}</Text></View><Text style={styles.available}>LIVE</Text></View>
    </View>

    {joined ? <View style={styles.joined}><Text style={styles.joinedCheck}>✓</Text><View style={{ flex: 1 }}><Text style={styles.joinedTitle}>Je gaat mee</Text><Text style={styles.joinedSub}>Het plan staat nu in je chat. Spreek daar veilig af met de groep.</Text></View></View> : null}

    <PrimaryButton label={joined ? 'Open groepschat' : 'Ik ga mee'} onPress={() => joined ? router.push('/chat/sanne') : setJoined(true)} />
    <PrimaryButton label="Stel een vraag" variant="outline" onPress={() => router.push('/chat/sanne')} />

    <Text style={styles.footer}>Geen verplichtingen · veilig in-app contact · meldingen en blokkeren altijd beschikbaar</Text>
  </Screen>;
}

const styles = StyleSheet.create({
  hero: { height: 340, marginHorizontal: -20, marginTop: -18, justifyContent: 'space-between' },
  overlay: { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.34)' },
  heroTop: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingTop: 28 }, back: { color: C.white, fontSize: 35 }, share: { color: C.white, fontSize: 22 },
  heroText: { padding: 20 }, time: { alignSelf: 'flex-start', backgroundColor: C.red, color: C.white, paddingHorizontal: 8, paddingVertical: 5, fontSize: 10, fontWeight: '900', textTransform: 'uppercase' },
  title: { color: C.white, fontSize: 46, lineHeight: 49, fontWeight: '900', marginTop: 8 }, venue: { color: C.white, fontSize: 18, fontWeight: '700' },
  card: { marginTop: -13, backgroundColor: C.white, borderRadius: 12, borderWidth: 1, borderColor: C.line, padding: 15 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 4 }, label: { fontSize: 8, fontWeight: '900', color: C.muted, letterSpacing: 0.8 }, value: { fontSize: 13, fontWeight: '800', marginTop: 3 }, sub: { fontSize: 9, color: C.muted, marginTop: 2 }, icon: { fontSize: 20, color: C.muted },
  line: { height: 1, backgroundColor: C.line, marginVertical: 10 }, avatars: { fontSize: 10 }, available: { color: C.green, fontSize: 9, fontWeight: '900', letterSpacing: 0.7 },
  joined: { marginTop: 15, padding: 13, flexDirection: 'row', gap: 10, alignItems: 'center', backgroundColor: C.oliveSoft, borderRadius: 8, borderWidth: 1, borderColor: C.olive }, joinedCheck: { width: 30, height: 30, borderRadius: 15, textAlign: 'center', paddingTop: 5, backgroundColor: C.green, color: C.white, fontWeight: '900' }, joinedTitle: { fontWeight: '900', fontSize: 12 }, joinedSub: { color: C.muted, fontSize: 9, lineHeight: 13, marginTop: 2 },
  footer: { color: C.muted, textAlign: 'center', fontSize: 9, lineHeight: 13, marginTop: 12 },
});