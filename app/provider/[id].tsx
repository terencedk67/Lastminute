import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { providers } from '@/src/data';
import { Brand, C, PrimaryButton, Screen } from '@/src/ui';

export default function ProviderDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const provider = providers.find((p) => p.id === id) ?? providers[0];
  const [slot, setSlot] = useState('11:00');
  return <Screen>
    <View style={styles.top}><Pressable onPress={() => router.back()}><Text style={styles.back}>‹</Text></Pressable><Brand compact /><Text>♡</Text></View>
    <Image source={{ uri: provider.image }} style={styles.hero} />
    <View style={styles.titleRow}><View><Text style={styles.name}>{provider.name}</Text><Text style={styles.role}>{provider.role}</Text><Text style={styles.distance}>⌖ {provider.distance} bij jou vandaan</Text></View><View style={{ alignItems: 'flex-end' }}><Text style={styles.rating}>★ {provider.rating}</Text><Text style={styles.reviews}>({provider.reviews})</Text></View></View>
    <Text style={styles.label}>Vandaag beschikbaar</Text>
    <View style={styles.slots}>{['10:30','11:00','11:30','12:00','12:30'].map((x) => <Pressable key={x} onPress={() => setSlot(x)} style={[styles.slot, slot === x && styles.slotActive]}><Text style={[styles.slotText, slot === x && { color: C.white }]}>{x}</Text></Pressable>)}</View>
    <View style={styles.trust}><View><Text style={styles.trustIcon}>☆</Text><Text style={styles.trustTitle}>Top beoordeeld</Text><Text style={styles.trustSub}>{provider.reviews} reviews</Text></View><View><Text style={styles.trustIcon}>◇</Text><Text style={styles.trustTitle}>Geverifieerd</Text><Text style={styles.trustSub}>ID & KvK gecheckt</Text></View><View><Text style={styles.trustIcon}>▣</Text><Text style={styles.trustTitle}>5+ jaar ervaring</Text><Text style={styles.trustSub}>Haar & styling</Text></View></View>
    <View style={styles.bottom}><View><Text style={styles.priceLabel}>Prijs</Text><Text style={styles.price}>€ {provider.price}</Text></View><View style={{ flex: 1 }}><PrimaryButton label={`Kies ${slot}`} onPress={() => router.push(`/booking?provider=${provider.id}&slot=${slot}`)} /></View></View>
  </Screen>;
}

const styles = StyleSheet.create({ top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }, back: { fontSize: 32 }, hero: { height: 250, marginHorizontal: -20, resizeMode: 'cover' }, titleRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, borderBottomWidth: 1, borderColor: C.line }, name: { fontSize: 25, fontWeight: '900' }, role: { fontSize: 12, marginTop: 2 }, distance: { fontSize: 10, color: C.muted, marginTop: 5 }, rating: { color: C.red, fontWeight: '900', fontSize: 17 }, reviews: { color: C.muted, fontSize: 10 }, label: { marginTop: 18, marginBottom: 8, fontSize: 10, fontWeight: '900', textTransform: 'uppercase' }, slots: { flexDirection: 'row', gap: 6, flexWrap: 'wrap' }, slot: { borderWidth: 1, borderColor: C.line, paddingHorizontal: 12, paddingVertical: 10, borderRadius: 5, backgroundColor: C.white }, slotActive: { backgroundColor: C.olive }, slotText: { fontSize: 11, fontWeight: '800' }, trust: { flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderBottomWidth: 1, borderColor: C.line, paddingVertical: 18, marginTop: 18 }, trustIcon: { textAlign: 'center', fontSize: 20 }, trustTitle: { textAlign: 'center', fontSize: 9, fontWeight: '900', textTransform: 'uppercase', marginTop: 5 }, trustSub: { textAlign: 'center', fontSize: 8, color: C.muted, marginTop: 2 }, bottom: { flexDirection: 'row', gap: 20, alignItems: 'center', marginTop: 20 }, priceLabel: { fontSize: 9, textTransform: 'uppercase', fontWeight: '900' }, price: { fontSize: 21, fontWeight: '900' } });
