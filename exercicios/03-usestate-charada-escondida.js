/**
 * Exercício 3 — Charada escondida
 * useState · && · 6 min
 *
 * Para rodar este arquivo, em exercicios/ativo.js:
 * export { default } from './03-usestate-charada-escondida';
 *
 * 1. Mostre a charada: "O que é, o que é? Feito para andar e não anda."
 * 2. Crie o estado mostrar começando em false.
 * 3. Um botão Mostrar resposta / Esconder resposta que inverte o mostrar.
 * 4. A resposta ("A rua!") só aparece quando mostrar for true. Use &&.
 *
 * Desafio extra: conte quantas vezes a pessoa clicou no botão (mais um estado).
 */

import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function App() {
  // 1. os estados ficam aqui

  return (
    <View style={{ flex: 1, padding: 24, paddingTop: 60, gap: 12 }}>
      <Text>Exercício 3 — Charada escondida</Text>
      {/* 2. o que aparece na tela */}
      {/* 3. os botões */}
    </View>
  );
}
