/**
 * Exercício 2 — Meta de passos
 * useEffect · [estado] · 7 min
 *
 * Para rodar este arquivo, em exercicios/ativo.js:
 * export { default } from './07-useeffect-meta-de-passos';
 *
 * 1. Crie dois estados: passos e agua, com um botão +1 para cada.
 * 2. Crie um efeito com [passos] que faz
 *    console.log('passos mudou para', passos).
 * 3. Dentro do efeito: quando passos chegar a 5,
 *    mostre um Alert "Meta! 🎉".
 * 4. Toque em +1 copo: o console fica quieto?
 *    Toque em +1 passo: o console fala?
 *
 * Desafio extra: troque para [agua] e veja o que muda.
 * Depois, coloque os dois: [passos, agua].
 */

import { useEffect, useState } from 'react';
import { Alert, Button, Text, View } from 'react-native';

export default function App() {
  // 1. os estados ficam aqui

  return (
    <View style={{ flex: 1, padding: 24, paddingTop: 60, gap: 12 }}>
      <Text>Exercício 2 — Meta de passos</Text>
      {/* 2. o que aparece na tela */}
      {/* 3. os botões */}
    </View>
  );
}
