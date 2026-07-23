import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Brand, C, Display, PrimaryButton, Screen } from '@/src/ui';

function Stepper({ value, onChange, suffix = '' }: { value: number; onChange: (v: number) => void; suffix?: string }) {
  return <View style={styles.stepper}><Text style={styles.stepValue}>{suffix === '€' ? '€ ' : ''}{value}{suffix === 'km' ? ' km' : ''}</Text><View style={styles.stepButtons}><Pressable onPress={() => onChange(Math.max(0, value - 1))} style={styles.step}><Text>−</Text></Pressable><Pressable onPress={() => onChange(value + 1)} style={styles.step}><Text>＋</Text></Pressable></View></View>;
}

export default function RequestScreen() {
  const router = useRouter();
  const [text, setText] = useState('Ik wil mijn haar knippen over 30 minuten');
  const [radius, setRadius] = useState(3);
  const [budget, setBudget] = useState(40);
  const [when, setWhen] = useState('30 min');
  return <Screen>
    <View style={styles.top}><Pressable onPress={() => router.back()}><Text style={styles.back}>‹</Text></Pressable><Brand compact /><View style={{ width: 24 }} /></View>
    <Display size={36}>Vertel wat je wilt</Display>
    <TextInput value={text} onChangeText={setText} multiline maxLength={120} style={styles.input} placeholder="Bijv. ik wil over een uur trainen..." placeholderTextColor={C.muted} />
    <Text style={styles.count}>{text.length}/120</Text>
    <Text style={styles.label}>Wanneer?</Text>
    <View style={styles.chips}>{['30 min', '1 uur', '2 uur', 'Vanavond'].map((x) => <Pressable key={x} onPress={() => setWhen(x)} style={[styles.chip, when === x && styles.chipActive]}><Text style={[styles.chipText, when === x && { color: C.white }]}>{x}</Text></Pressable>)}</View>
    <Text style={styles.label}>Binnen een straal van</Text><Stepper value={radius} onChange={setRadius} suffix="km" />
    <Text style={styles.label}>Je budget (optioneel)</Text><Stepper value={budget} onChange={(v) => setBudget(Math.max(0, v))} suffix="€" />
    <View style={styles.summary}><Text style={styles.summaryTitle}>Slimme match</Text><Text style={styles.summaryText}>We sturen dit request naar relevante aanbieders binnen {radius} km die {when === 'Vanavond' ? 'vanavond' : `binnen ${when}`} kunnen.</Text></View>
    <PrimaryButton label="Zoek aanbieders" onPress={() => router.push('/matches')} />
  </Screen>;
}

const styles = StyleSheet.create({ top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }, back: { fontSize: 32 }, input: { minHeight: 126, borderWidth: 1, borderColor: C.line, backgroundColor: C.white, borderRadius: 7, padding: 14, fontSize: 16, lineHeight: 22, textAlignVertical: 'top', marginTop: 16 }, count: { alignSelf: 'flex-end', color: C.muted, fontSize: 10, marginTop: 4 }, label: { fontSize: 10, fontWeight: '900', textTransform: 'uppercase', color: C.muted, marginTop: 22, marginBottom: 7 }, chips: { flexDirection: 'row', gap: 7, flexWrap: 'wrap' }, chip: { borderWidth: 1, borderColor: C.line, paddingVertical: 9, paddingHorizontal: 12, borderRadius: 7, backgroundColor: C.white }, chipActive: { backgroundColor: C.ink }, chipText: { fontSize: 12, fontWeight: '800' }, stepper: { height: 52, borderWidth: 1, borderColor: C.line, backgroundColor: C.white, borderRadius: 7, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 14 }, stepValue: { fontSize: 19, fontWeight: '800' }, stepButtons: { flexDirection: 'row', height: '100%' }, step: { width: 48, alignItems: 'center', justifyContent: 'center', borderLeftWidth: 1, borderLeftColor: C.line }, summary: { backgroundColor: C.oliveSoft, borderRadius: 7, padding: 14, marginTop: 24 }, summaryTitle: { fontWeight: '900', fontSize: 13 }, summaryText: { fontSize: 12, lineHeight: 17, marginTop: 4, color: C.muted } });
