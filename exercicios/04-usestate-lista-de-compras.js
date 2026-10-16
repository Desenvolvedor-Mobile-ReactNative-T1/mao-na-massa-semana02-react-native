/**
 * Exercício 4 — Lista de compras
 * useState · array · 12 min
 *
 * Para rodar este arquivo, em exercicios/ativo.js:
 * export { default } from './04-usestate-lista-de-compras';
 *
 * 1. Crie dois estados: item (texto, '') e itens (lista, []).
 * 2. Um TextInput controlado com placeholder "Ex.: pão".
 * 3. Botão Adicionar: coloca { id: Date.now(), nome: item }
 *    na lista com spread e limpa o campo.
 * 4. Campo vazio? Mostre um Alert e não adicione (use trim()).
 * 5. Mostre "🛒 Lista de compras (N)" e cada item com .map() e key.
 * 6. Lista vazia? Mostre "Sua lista está vazia."
 *
 * Desafio extra: um botão Remover em cada item, com filter.
 */

import { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';

export default function App() {
  // 1. os estados ficam aqui

  return (
    <View style={{ flex: 1, padding: 24, paddingTop: 60, gap: 12 }}>
      <Text>Exercício 4 — Lista de compras</Text>
      {/* 2. o que aparece na tela */}
      {/* 3. os botões */}
    </View>
  );
}
