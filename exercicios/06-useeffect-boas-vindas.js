/**
 * Exercício 1 — Boas-vindas
 * useEffect · [] · 5 min
 *
 * Para rodar este arquivo, em exercicios/ativo.js:
 * export { default } from './06-useeffect-boas-vindas';
 *
 * 1. Com useEffect e [], mostre um Alert "Bem-vindo"
 *    e um console.log('A tela abriu!').
 * 2. Crie um contador com um botão Clicar.
 * 3. Clique várias vezes: o alerta não volta. Por quê?
 * 4. Agora apague o [] e clique de novo. O que mudou?
 *    Volte o [] depois.
 *
 * Ao salvar o arquivo, o alerta aparece de novo.
 * É o Fast Refresh montando a tela outra vez.
 */

import { useEffect, useState } from 'react';
import { Alert, Button, Text, View } from 'react-native';

export default function App() {
  // 1. os estados ficam aqui

  return (
    <View style={{ flex: 1, padding: 24, paddingTop: 60, gap: 12 }}>
      <Text>Exercício 1 — Boas-vindas</Text>
      {/* 2. o que aparece na tela */}
      {/* 3. os botões */}
    </View>
  );
}
