/**
 * Exercício 1 — Placar do jogo
 * useState · dois estados · 7 min
 *
 * Para rodar este arquivo, em exercicios/ativo.js:
 * export { default } from './01-usestate-placar-do-jogo';
 *
 * 1. Crie dois estados: timeA e timeB, os dois começando em 0.
 * 2. Mostre o placar: "Time A 2 x 1 Time B".
 * 3. Um botão Gol do Time A e um Gol do Time B.
 *    Use a forma de função: (atual) => atual + 1.
 * 4. Um botão Zerar placar que volta os dois para 0.
 *    Dica: uma função zerar() com dois sets.
 *
 * Desafio extra: embaixo do placar, mostre "Empate",
 * "Time A vencendo" ou "Time B vencendo".
 */

import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function App() {
  // 1. os estados ficam aqui

  return (
    <View style={{ flex: 1, padding: 24, paddingTop: 60, gap: 12 }}>
      <Text>Exercício 1 — Placar do jogo</Text>
      {/* 2. o que aparece na tela */}
      {/* 3. os botões */}
    </View>
  );
}
