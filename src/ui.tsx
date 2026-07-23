import type { PropsWithChildren, ReactNode } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

export const C = {
  paper: '#F4F0E8',
  ink: '#11110F',
  red: '#E52B20',
  redDark: '#C91F16',
  olive: '#7C8152',
  oliveSoft: '#E3E2D2',
  line: '#CBC5B8',
  muted: '#6F6B64',
  white: '#FFFFFF',
  soft: '#EBE6DD',
  green: '#6D7C3D',
};

export const displayFont = Platform.select({
  ios: 'Avenir Next Condensed',
  android: 'sans-serif-condensed',
  web: 'Impact',
  default: 'System',
});

export function Screen({ children, scroll = true, style }: PropsWithChildren<{ scroll?: boolean; style?: StyleProp<ViewStyle> }>) {
  const content = <View style={[styles.screen, style]}>{children}</View>;
  if (!scroll) return <View style={styles.shell}>{content}</View>;
  return <ScrollView style={styles.shell} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>{content}</ScrollView>;
}

export function Brand({ compact = false }: { compact?: boolean }) {
  return <Text style={[styles.brand, compact && { fontSize: 18 }]}>LASTMINUTE</Text>;
}

export function Display({ children, size = 40 }: PropsWithChildren<{ size?: number }>) {
  return <Text style={[styles.display, { fontSize: size, lineHeight: size * 0.98 }]}>{children}</Text>;
}

export function Eyebrow({ children }: PropsWithChildren) {
  return <Text style={styles.eyebrow}>{children}</Text>;
}

export function SectionTitle({ children, right }: PropsWithChildren<{ right?: ReactNode }>) {
  return <View style={styles.sectionRow}><Text style={styles.sectionTitle}>{children}</Text>{right}</View>;
}

export function Pill({ children, active = false, tone = 'plain' }: PropsWithChildren<{ active?: boolean; tone?: 'plain' | 'red' | 'olive' }>) {
  const bg = active || tone === 'red' ? C.ink : tone === 'olive' ? C.oliveSoft : C.paper;
  const color = active || tone === 'red' ? C.white : C.ink;
  return <View style={[styles.pill, { backgroundColor: bg }]}><Text style={[styles.pillText, { color }]}>{children}</Text></View>;
}

export function PrimaryButton({ label, onPress, variant = 'red' }: { label: string; onPress: () => void; variant?: 'red' | 'dark' | 'outline' }) {
  const backgroundColor = variant === 'red' ? C.red : variant === 'dark' ? C.ink : 'transparent';
  const color = variant === 'outline' ? C.ink : C.white;
  return <Pressable onPress={onPress} style={({ pressed }) => [styles.button, { backgroundColor, opacity: pressed ? 0.78 : 1 }, variant === 'outline' && styles.outlineButton]}>
    <Text style={[styles.buttonText, { color }]}>{label}</Text>
  </Pressable>;
}

export function TinyIcon({ children, red = false }: PropsWithChildren<{ red?: boolean }>) {
  return <View style={[styles.tinyIcon, red && { backgroundColor: C.red }]}><Text style={[styles.tinyIconText, red && { color: C.white }]}>{children}</Text></View>;
}

export const cardShadow = Platform.select({
  web: { boxShadow: '0 10px 30px rgba(30,20,10,0.08)' } as any,
  default: {
    shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 14, shadowOffset: { width: 0, height: 8 }, elevation: 2,
  },
});

const styles = StyleSheet.create({
  shell: { flex: 1, backgroundColor: '#D9D4CB' },
  scrollContent: { flexGrow: 1, alignItems: 'center' },
  screen: {
    flex: 1,
    width: '100%',
    maxWidth: 520,
    minHeight: Platform.OS === 'web' ? ('100vh' as any) : undefined,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 120,
    backgroundColor: C.paper,
    ...(Platform.OS === 'web' ? { borderLeftWidth: 1, borderRightWidth: 1, borderColor: '#B9B2A7' } : {}),
  },
  brand: { color: C.red, fontFamily: displayFont, fontSize: 22, letterSpacing: 0.4 },
  display: { color: C.ink, fontFamily: displayFont, textTransform: 'uppercase', letterSpacing: -0.4 },
  eyebrow: { fontSize: 11, fontWeight: '800', letterSpacing: 0.8, color: C.muted, textTransform: 'uppercase' },
  sectionRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 26, marginBottom: 10 },
  sectionTitle: { fontSize: 16, fontWeight: '900', color: C.ink },
  pill: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999, borderWidth: 1, borderColor: C.line },
  pillText: { fontSize: 12, fontWeight: '800' },
  button: { height: 52, alignItems: 'center', justifyContent: 'center', borderRadius: 7, marginTop: 10 },
  outlineButton: { borderWidth: 1, borderColor: C.ink },
  buttonText: { fontWeight: '900', fontSize: 13, letterSpacing: 0.5, textTransform: 'uppercase' },
  tinyIcon: { width: 34, height: 34, borderRadius: 17, alignItems: 'center', justifyContent: 'center', backgroundColor: C.soft },
  tinyIconText: { fontSize: 15, color: C.ink, fontWeight: '900' },
});
