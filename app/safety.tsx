import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { C, Display, Screen } from '@/src/ui';

const Item = ({ title, text, action }: { title: string; text: string; action: string }) => <View style={styles.item}><View style={{ flex: 1 }}><Text style={styles.itemTitle}>{title}</Text><Text style={styles.itemText}>{text}</Text></View><Pressable style={styles.small}><Text style={styles.smallText}>{action}</Text></Pressable></View>;

export default function Safety() {
  const router = useRouter();
  return <Screen>
    <Pressable onPress={() => router.back()}><Text style={styles.back}>‹</Text></Pressable>
    <Display size={32}>Veiligheidscentrum</Display>
    <View style={styles.verified}><Text style={styles.shield}>◇</Text><View><Text style={styles.verifyTitle}>Geverifieerd profiel</Text><Text style={styles.verifySub}>Je identiteit is bevestigd</Text></View><Text style={styles.more}>Meer info</Text></View>
    <Item title="Deel je plan" text="Laat iemand weten waar je bent en wanneer je terug bent." action="Plan delen" />
    <Item title="Melden en blokkeren" text="Ongewenst gedrag? Meld het direct. We nemen elke melding serieus." action="Meld iemand" />
    <Pressable style={styles.emergency}><Text style={styles.phone}>☎</Text><View><Text style={styles.emTitle}>Noodhulp</Text><Text style={styles.emSub}>Directe hulp nodig? Bel 112</Text></View></Pressable>
    <Text style={styles.note}>LASTMINUTE is geen hulpdienst. Bel bij direct gevaar altijd 112.</Text>
  </Screen>;
}

const styles = StyleSheet.create({ back: { fontSize: 32, marginBottom: 8 }, verified: { marginTop: 18, flexDirection: 'row', alignItems: 'center', gap: 12, padding: 13, backgroundColor: C.oliveSoft, borderWidth: 1, borderColor: '#B7BD8F', borderRadius: 8 }, shield: { fontSize: 24, color: C.green }, verifyTitle: { fontWeight: '900', fontSize: 13 }, verifySub: { fontSize: 10, color: C.muted, marginTop: 2 }, more: { marginLeft: 'auto', fontSize: 9, fontWeight: '800' }, item: { marginTop: 12, minHeight: 82, flexDirection: 'row', alignItems: 'center', gap: 12, padding: 13, backgroundColor: C.white, borderWidth: 1, borderColor: C.line, borderRadius: 8 }, itemTitle: { fontWeight: '900', fontSize: 13 }, itemText: { fontSize: 10, color: C.muted, lineHeight: 14, marginTop: 3 }, small: { borderWidth: 1, borderColor: C.line, borderRadius: 5, paddingHorizontal: 8, paddingVertical: 7 }, smallText: { fontSize: 9, fontWeight: '800' }, emergency: { marginTop: 12, minHeight: 88, flexDirection: 'row', alignItems: 'center', gap: 14, backgroundColor: C.red, borderRadius: 8, padding: 15 }, phone: { fontSize: 28, color: C.white }, emTitle: { fontSize: 16, fontWeight: '900', color: C.white }, emSub: { color: C.white, marginTop: 3 }, note: { color: C.muted, fontSize: 9, textAlign: 'center', marginTop: 10 } });
