/**
 * Gabarito — Meta de passos.
 *
 * O efeito observa só passos. +1 copo muda agua e o console
 * fica quieto. +1 passo muda passos e o console fala.
 * Ao abrir, o efeito também roda uma vez, com passos em 0.
 *
 * Desafio extra, sem deixar ligado neste arquivo:
 *   [agua]          o console passa a reagir só aos copos
 *   [passos, agua]  o console reage aos dois
 *
 * Para ver no Expo Go, em exercicios/ativo.js:
 * export { default } from '../gabarito/07-useeffect-meta-de-passos';
 */

import { useEffect, useState } from "react";
import { Alert, Button, Text, View } from "react-native";

export default function App() {
  const [passos, setPassos] = useState(0);
  const [agua, setAgua] = useState(0);

  useEffect(() => {
    console.log("passos mudou para", passos);
    if (passos === 5) {
      Alert.alert("Meta! 🎉");
    }
  }, [passos]);

  return (
    <View style={{ flex: 1, padding: 24, paddingTop: 60, gap: 12 }}>
      <Text>👟 {passos} passos</Text>
      <Button
        title="+1 passo"
        onPress={() => setPassos((atual) => atual + 1)}
      />
      <Text>💧 {agua} copos</Text>
      <Button title="+1 copo" onPress={() => setAgua((atual) => atual + 1)} />
    </View>
  );
}
