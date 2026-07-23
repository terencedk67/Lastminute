import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { activities } from '@/src/data';
import { C, Display, Pill, Screen } from '@/src/ui';

export default function Activities() {
  const router = useRouter();
  return <Screen>
    <View style={styles.head}><Display size={31}>Activiteiten</Display><Text style={styles.filter}>☷</Text></View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>
      <Pill active>Alles</Pill><Pill>Cinema</Pill><Pill>Padel</Pill><Pill>Drinks</Pill><Pill>Live muziek</Pill>
    </ScrollView>
    <Text style={styles.within}>Binnen 3 uur</Text>
    <View style={{ gap: 9 }}>
      {activities.map((a) => <Pressable key={a.id} onPress={() => router.push(`/activity/${a.id}`)} style={styles.card}>
        <Image source={{ uri: a.image }} style={styles.image} />
        <View style={{ flex: 1 }}><Text style={styles.time}>{a.in}</Text><Text style={styles.title}>{a.title}</Text><Text style={styles.venue}>{a.venue}</Text><Text style={styles.distance}>{a.distance}</Text></View>
        <Text style={styles.spots}>{a.spots}</Text>
      </Pressable>)}
    </View>
  </Screen>;
}

const styles = StyleSheet.create({
  head: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  filter: { fontSize: 24, fontWeight: '900' }, chips: { gap: 7, paddingRight: 12 }, within: { fontSize: 17, fontWeight: '900', marginTop: 24, marginBottom: 12 },
  card: { flexDirection: 'row', minHeight: 96, padding: 9, backgroundColor: C.white, borderWidth: 1, borderColor: C.line, borderRadius: 8, gap: 12, alignItems: 'center' },
  image: { width: 76, height: 76, borderRadius: 5 }, time: { color: C.red, fontSize: 10, fontWeight: '900', textTransform: 'uppercase' }, title: { fontSize: 18, fontWeight: '900', marginTop: 2 }, venue: { fontSize: 12, color: C.ink }, distance: { fontSize: 10, color: C.muted, marginTop: 2 }, spots: { alignSelf: 'flex-end', color: C.green, fontSize: 10, fontWeight: '800', marginBottom: 4 },
});
