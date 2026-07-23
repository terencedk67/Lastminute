import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Brand, C, Display, PrimaryButton, Screen } from '@/src/ui';

export default function Welcome() {
  const router = useRouter();
  return <Screen scroll={false} style={styles.screen}>
    <View style={styles.top}><Brand /></View>
    <Display size={43}>Wat je nodig hebt.{`\n`}Nu. Direct.</Display>
    <Text style={styles.copy}>De real-time marktplaats voor diensten, activiteiten en echte ontmoetingen.</Text>
    <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=90' }} style={styles.hero} imageStyle={styles.heroImage}>
      <View style={styles.fade} />
      <View style={styles.actions}>
        <PrimaryButton label="Aan de slag" onPress={() => router.replace('/(tabs)/live')} />
        <PrimaryButton label="Inloggen" variant="outline" onPress={() => router.replace('/(tabs)/live')} />
      </View>
    </ImageBackground>
  </Screen>;
}

const styles = StyleSheet.create({
  screen: { paddingBottom: 18 },
  top: { alignItems: 'center', marginBottom: 26 },
  copy: { fontSize: 15, lineHeight: 21, color: C.ink, maxWidth: 280, marginTop: 14, marginBottom: 18 },
  hero: { flex: 1, minHeight: 390, justifyContent: 'flex-end', marginHorizontal: -20, marginBottom: -18 },
  heroImage: { resizeMode: 'cover' },
  fade: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(10,8,5,0.13)' },
  actions: { padding: 20, paddingBottom: 28, backgroundColor: 'rgba(244,240,232,0.84)' },
});
