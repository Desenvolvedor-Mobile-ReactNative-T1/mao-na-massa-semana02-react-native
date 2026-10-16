/**
 * Exercício 2 — Volume de 0 a 10
 * useState · limite · 8 min
 *
 * Para rodar este arquivo, em exercicios/ativo.js:
 * export { default } from './02-usestate-volume';
 *
 * 1. Crie o estado volume começando em 5.
 * 2. Botões + e - que somam e tiram 1.
 * 3. O volume nunca passa de 10 e nunca fica abaixo de 0.
 *    Use: setVolume((atual) => (atual < 10 ? atual + 1 : atual)).
 * 4. Quando o volume for 0, mostre "🔇 Mudo".
 *    Quando for 10, mostre "Volume máximo!". Use &&.
 *
 * Desafio extra: uma barrinha de volume: '█'.repeat(volume).
 */

import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function App() {
  // 1. os estados ficam aqui

  return (
    <View style={{ flex: 1, padding: 24, paddingTop: 60, gap: 12 }}>
      <Text>Exercício 2 — Volume de 0 a 10</Text>
      {/* 2. o que aparece na tela */}
      {/* 3. os botões */}
    </View>
  );
}
