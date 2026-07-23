import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { activities } from '@/src/data';
import { C, PrimaryButton, Screen } from '@/src/ui';

export default function ActivityDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const activity = activities.find((a) => a.id === id) ?? activities[0];
  return <Screen>
    <ImageBackground source={{ uri: activity.image }} style={styles.hero} imageStyle={{ resizeMode: 'cover' }}>
      <View style={styles.overlay} /><View style={styles.heroTop}><Pressable onPress={() => router.back()}><Text style={styles.back}>‹</Text></Pressable><Text style={styles.share}>⇧</Text></View>
      <View style={styles.heroText}><Text style={styles.time}>{activity.in}</Text><Text style={styles.title}>{activity.title}</Text><Text style={styles.venue}>{activity.venue}</Text></View>
    </ImageBackground>
    <View style={styles.card}><Text style={styles.detail}>▣ Vandaag om 20:30</Text><Text style={styles.detail}>⌖ Vijzelstraat 15, Amsterdam · {activity.distance}</Text><View style={styles.going}><Text style={styles.detail}>♙ Gaan</Text><Text>● ● ● +3</Text></View><View style={styles.going}><Text style={styles.detail}>◌ Beschikbare plekken</Text><Text style={styles.spots}>{activity.spots}</Text></View></View>
    <PrimaryButton label="Ik ga mee" onPress={() => router.push('/chat/sanne')} />
    <PrimaryButton label="Stel een vraag" variant="outline" onPress={() => router.push('/chat/sanne')} />
  </Screen>;
}

const styles = StyleSheet.create({ hero: { height: 330, marginHorizontal: -20, marginTop: -18, justifyContent: 'space-between' }, overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.33)' }, heroTop: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingTop: 28 }, back: { color: C.white, fontSize: 35 }, share: { color: C.white, fontSize: 22 }, heroText: { padding: 20 }, time: { alignSelf: 'flex-start', backgroundColor: C.red, color: C.white, paddingHorizontal: 8, paddingVertical: 5, fontSize: 10, fontWeight: '900', textTransform: 'uppercase' }, title: { color: C.white, fontSize: 46, lineHeight: 50, fontWeight: '900', marginTop: 8 }, venue: { color: C.white, fontSize: 18, fontWeight: '700' }, card: { marginTop: -12, backgroundColor: C.white, borderRadius: 12, borderWidth: 1, borderColor: C.line, padding: 15 }, detail: { fontSize: 13, paddingVertical: 8 }, going: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, spots: { color: C.green, fontWeight: '900' } });
