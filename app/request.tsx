import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Brand, C, Display, PrimaryButton, Screen } from '@/src/ui';

function Stepper({ value, onChange, suffix = '' }: { value: number; onChange: (v: number) => void; suffix?: string }) {
  return <View style={styles.stepper}><Text style={styles.stepValue}>{suffix === '€' ? '€ ' : ''}{value}{suffix === 'km' ? ' km' : ''}</Text><View style={styles.stepButtons}><Pressable onPress={() => onChange(Math.max(0, value - 1))} style={styles.step}><Text style={styles.stepSymbol}>−</Text></Pressable><Pressable onPress={() => onChange(value + 1)} style={styles.step}><Text style={styles.stepSymbol}>＋</Text></Pressable></View></View>;
}

const examples = ['Haar knippen', 'Personal trainer', 'Maaltijd vanavond', 'Fotograaf vandaag'];

export default function RequestScreen() {
  const router = useRouter();
  const [text, setText] = useState('Ik wil mijn haar knippen over 30 minuten');
  const [radius, setRadius] = useState(3);
  const [budget, setBudget] = useState(40);
  const [when, setWhen] = useState('30 min');
  const canSubmit = useMemo(() => text.trim().length >= 8, [text]);

  return <Screen>
    <View style={styles.top}><Pressable onPress={() => router.back()}><Text style={styles.back}>‹</Text></Pressable><Brand compact /><View style={{ width: 24 }} /></View>
    <Display size={36}>Vertel wat je wilt</Display>
    <Text style={styles.intro}>Geen categorieën nodig. Beschrijf gewoon wat je nu wilt regelen.</Text>

    <TextInput value={text} onChangeText={setText} multiline maxLength={120} style={styles.input} placeholder="Bijv. ik wil over een uur trainen..." placeholderTextColor={C.muted} />
    <Text style={styles.count}>{text.length}/120</Text>

    <Text style={styles.label}>Snelle voorbeelden</Text>
    <View style={styles.examples}>{examples.map((example) => <Pressable key={example} onPress={() => setText(`Ik wil ${example.toLowerCase()} binnen ${when}`)} style={styles.example}><Text style={styles.exampleText}>{example}</Text></Pressable>)}</View>

    <Text style={styles.label}>Wanneer?</Text>
    <View style={styles.chips}>{['30 min', '1 uur', '2 uur', 'Vanavond'].map((x) => <Pressable key={x} onPress={() => setWhen(x)} style={[styles.chip, when === x && styles.chipActive]}><Text style={[styles.chipText, when === x && { color: C.white }]}>{x}</Text></Pressable>)}</View>

    <Text style={styles.label}>Binnen een straal van</Text><Stepper value={radius} onChange={setRadius} suffix="km" />
    <Text style={styles.label}>Je budget (optioneel)</Text><Stepper value={budget} onChange={(v) => setBudget(Math.max(0, v))} suffix="€" />

    <View style={styles.summary}><View style={styles.summaryTop}><Text style={styles.summaryTitle}>SLIMME MATCH</Text><Text style={styles.ai}>AI</Text></View><Text style={styles.summaryText}>We zoeken relevante aanbieders binnen {radius} km die {when === 'Vanavond' ? 'vanavond' : `binnen ${when}`} beschikbaar zijn{budget > 0 ? ` rond €${budget}` : ''}.</Text></View>
    <View style={!canSubmit && { opacity: 0.45 }} pointerEvents={canSubmit ? 'auto' : 'none'}><PrimaryButton label="Zoek aanbieders" onPress={() => router.push('/matches')} /></View>
    {!canSubmit && <Text style={styles.validation}>Beschrijf je request iets uitgebreider.</Text>}
  </Screen>;
}

const styles = StyleSheet.create({
  top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 },
  back: { fontSize: 32 },
  intro: { color: C.muted, fontSize: 13, lineHeight: 18, marginTop: 8, maxWidth: 330 },
  input: { minHeight: 126, borderWidth: 1, borderColor: C.line, backgroundColor: C.white, borderRadius: 7, padding: 14, fontSize: 16, lineHeight: 22, textAlignVertical: 'top', marginTop: 16 },
  count: { alignSelf: 'flex-end', color: C.muted, fontSize: 10, marginTop: 4 },
  label: { fontSize: 10, fontWeight: '900', textTransform: 'uppercase', color: C.muted, marginTop: 22, marginBottom: 7, letterSpacing: 0.5 },
  examples: { flexDirection: 'row', gap: 7, flexWrap: 'wrap' },
  example: { borderBottomWidth: 1, borderBottomColor: C.ink, paddingVertical: 5 },
  exampleText: { fontSize: 11, fontWeight: '800' },
  chips: { flexDirection: 'row', gap: 7, flexWrap: 'wrap' },
  chip: { borderWidth: 1, borderColor: C.line, paddingVertical: 9, paddingHorizontal: 12, borderRadius: 7, backgroundColor: C.white },
  chipActive: { backgroundColor: C.ink },
  chipText: { fontSize: 12, fontWeight: '800' },
  stepper: { height: 52, borderWidth: 1, borderColor: C.line, backgroundColor: C.white, borderRadius: 7, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 14 },
  stepValue: { fontSize: 19, fontWeight: '800' },
  stepButtons: { flexDirection: 'row', height: '100%' },
  step: { width: 48, alignItems: 'center', justifyContent: 'center', borderLeftWidth: 1, borderLeftColor: C.line },
  stepSymbol: { fontSize: 18, fontWeight: '700' },
  summary: { backgroundColor: C.oliveSoft, borderRadius: 7, padding: 14, marginTop: 24 },
  summaryTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  summaryTitle: { fontWeight: '900', fontSize: 11, letterSpacing: 0.5 },
  ai: { fontSize: 9, fontWeight: '900', color: C.white, backgroundColor: C.olive, paddingHorizontal: 7, paddingVertical: 3, borderRadius: 99 },
  summaryText: { fontSize: 12, lineHeight: 17, marginTop: 6, color: C.muted },
  validation: { color: C.red, fontSize: 10, fontWeight: '700', textAlign: 'center', marginTop: 7 },
});