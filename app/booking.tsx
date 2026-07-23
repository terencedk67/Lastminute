import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { providers } from '@/src/data';
import { Brand, C, Display, PrimaryButton, Screen } from '@/src/ui';

export default function Booking() {
  const { provider: providerId, slot = '11:00' } = useLocalSearchParams<{ provider?: string; slot?: string }>();
  const router = useRouter();
  const provider = providers.find((p) => p.id === providerId) ?? providers[0];
  const pay = () => Alert.alert('Prototype', 'Betaling is nog mock. De booking flow werkt en kan later aan Mollie/Stripe worden gekoppeld.');
  return <Screen>
    <View style={styles.top}><Pressable onPress={() => router.back()}><Text style={styles.back}>‹</Text></Pressable><Brand compact /><View style={{ width: 24 }} /></View>
    <Display size={34}>Bevestig je booking</Display>
    <View style={styles.card}>
      <View style={styles.provider}><Image source={{ uri: provider.image }} style={styles.avatar} /><View><Text style={styles.name}>{provider.name}</Text><Text style={styles.role}>{provider.role}</Text><Text style={styles.meta}>⌖ {provider.distance}</Text></View></View>
      <View style={styles.line} /><View style={styles.row}><Text>✂ Knippen</Text><Text>€ {provider.price.toFixed(2)}</Text></View><View style={styles.row}><Text>◷ Vandaag om {slot}</Text></View><View style={styles.row}><Text>⌖ Kerkstraat 123, Amsterdam</Text></View>
      <View style={styles.line} /><View style={styles.total}><Text style={styles.totalLabel}>Totaal</Text><Text style={styles.totalPrice}>€ {provider.price.toFixed(2)}</Text></View>
    </View>
    <PrimaryButton label="Apple Pay" variant="dark" onPress={pay} />
    <PrimaryButton label="Andere betaalmethode" variant="outline" onPress={pay} />
    <Text style={styles.safe}>✓ Veilig betalen · annuleren volgens voorwaarden · support in de app</Text>
  </Screen>;
}

const styles = StyleSheet.create({ top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 26 }, back: { fontSize: 32 }, card: { marginTop: 18, padding: 14, backgroundColor: C.white, borderWidth: 1, borderColor: C.line, borderRadius: 8 }, provider: { flexDirection: 'row', gap: 11, alignItems: 'center' }, avatar: { width: 54, height: 54, borderRadius: 27 }, name: { fontSize: 16, fontWeight: '900' }, role: { fontSize: 11 }, meta: { fontSize: 10, color: C.muted, marginTop: 3 }, line: { height: 1, backgroundColor: C.line, marginVertical: 14 }, row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8 }, total: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, totalLabel: { fontWeight: '900', textTransform: 'uppercase', fontSize: 11 }, totalPrice: { fontWeight: '900', fontSize: 22 }, safe: { textAlign: 'center', fontSize: 10, color: C.muted, marginTop: 14 } });
