import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { people } from '@/src/data';
import { C, Screen } from '@/src/ui';

export default function ChatDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const person = people.find((p) => p.id === id) ?? people[0];
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState<string[]>([]);
  return <Screen scroll={false} style={styles.screen}>
    <View style={styles.header}><Pressable onPress={() => router.back()}><Text style={styles.back}>‹</Text></Pressable><Image source={{ uri: person.image }} style={styles.avatar} /><View style={{ flex: 1 }}><Text style={styles.name}>{person.name}</Text><Text style={styles.status}>{person.plan}</Text></View><Text>◇</Text></View>
    <View style={styles.safety}><Text style={styles.safetyTitle}>▣ Chat veilig in de app</Text><Text style={styles.safetySub}>Deel persoonlijke gegevens alleen als jij dat wilt.</Text></View>
    <View style={styles.messages}><View style={styles.their}><Text>Hey! Leuk dat je mee wilt naar de film 🎬</Text><Text style={styles.time}>18:24</Text></View><View style={styles.mine}><Text style={{ color: C.white }}>Hoi {person.name}! Zin in. Zullen we bij de ingang afspreken?</Text><Text style={[styles.time,{color:'#FFD9D4'}]}>18:26 ✓✓</Text></View><View style={styles.their}><Text>Goed plan! Ik ben er rond 20:15.</Text><Text style={styles.time}>18:27</Text></View>{sent.map((m, i) => <View key={i} style={styles.mine}><Text style={{ color: C.white }}>{m}</Text><Text style={[styles.time,{color:'#FFD9D4'}]}>nu ✓</Text></View>)}</View>
    <View style={styles.confirm}><Text style={styles.check}>✓</Text><View><Text style={styles.confirmTitle}>Plan bevestigd</Text><Text style={styles.confirmSub}>Vandaag om 20:30 · Pathé De Munt</Text></View></View>
    <View style={styles.compose}><TextInput value={message} onChangeText={setMessage} placeholder="Typ een bericht..." placeholderTextColor={C.muted} style={styles.input} /><Pressable onPress={() => { if (message.trim()) { setSent((s) => [...s, message.trim()]); setMessage(''); } }} style={styles.send}><Text>➤</Text></Pressable></View>
  </Screen>;
}

const styles = StyleSheet.create({ screen: { paddingBottom: 12 }, header: { flexDirection: 'row', alignItems: 'center', gap: 10, borderBottomWidth: 1, borderBottomColor: C.line, paddingBottom: 10 }, back: { fontSize: 32 }, avatar: { width: 38, height: 38, borderRadius: 19 }, name: { fontWeight: '900' }, status: { color: C.muted, fontSize: 10 }, safety: { padding: 11, backgroundColor: C.oliveSoft, borderRadius: 7, marginTop: 12 }, safetyTitle: { fontWeight: '900', fontSize: 11 }, safetySub: { color: C.muted, fontSize: 9, marginTop: 2 }, messages: { flex: 1, gap: 9, paddingTop: 16 }, their: { maxWidth: '78%', alignSelf: 'flex-start', backgroundColor: C.white, borderWidth: 1, borderColor: C.line, padding: 11, borderRadius: 10 }, mine: { maxWidth: '78%', alignSelf: 'flex-end', backgroundColor: C.red, padding: 11, borderRadius: 10 }, time: { alignSelf: 'flex-end', fontSize: 8, color: C.muted, marginTop: 5 }, confirm: { flexDirection: 'row', gap: 10, backgroundColor: C.white, borderWidth: 1, borderColor: C.line, padding: 11, borderRadius: 8, marginBottom: 8 }, check: { width: 28, height: 28, borderRadius: 14, backgroundColor: C.oliveSoft, textAlign: 'center', paddingTop: 4, color: C.green, fontWeight: '900' }, confirmTitle: { fontWeight: '900', fontSize: 11 }, confirmSub: { fontSize: 9, color: C.muted }, compose: { flexDirection: 'row', gap: 8, alignItems: 'center' }, input: { flex: 1, height: 44, backgroundColor: C.white, borderWidth: 1, borderColor: C.line, borderRadius: 22, paddingHorizontal: 15 }, send: { width: 42, height: 42, borderRadius: 21, backgroundColor: C.oliveSoft, alignItems: 'center', justifyContent: 'center' } });
