import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { people } from '@/src/data';
import { C, Display, Screen } from '@/src/ui';

export default function ChatList() {
  const router = useRouter();
  return <Screen>
    <Display size={31}>Chat</Display>
    <Text style={styles.sub}>Je plannen en matches op één plek.</Text>
    <View style={{ marginTop: 20, gap: 10 }}>
      {people.slice(0, 3).map((p, i) => <Pressable key={p.id} onPress={() => router.push(`/chat/${p.id}`)} style={styles.row}>
        <Image source={{ uri: p.image }} style={styles.avatar} />
        <View style={{ flex: 1 }}><Text style={styles.name}>{p.name}</Text><Text style={styles.message}>{i === 0 ? 'Goed plan! Ik ben er rond 20:15.' : i === 1 ? 'Zullen we een baan reserveren?' : 'Ik ben over een uurtje klaar.'}</Text></View>
        <View style={{ alignItems: 'flex-end' }}><Text style={styles.time}>{18 + i}:2{i}</Text>{i === 0 && <View style={styles.unread}><Text style={styles.unreadText}>1</Text></View>}</View>
      </Pressable>)}
    </View>
  </Screen>;
}

const styles = StyleSheet.create({ sub: { color: C.muted, marginTop: 6 }, row: { flexDirection: 'row', gap: 11, alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: C.line }, avatar: { width: 48, height: 48, borderRadius: 24 }, name: { fontWeight: '900', fontSize: 14 }, message: { fontSize: 12, color: C.muted, marginTop: 4 }, time: { fontSize: 10, color: C.muted }, unread: { backgroundColor: C.red, width: 19, height: 19, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: 6 }, unreadText: { color: C.white, fontSize: 10, fontWeight: '900' } });
