/**
 * Caça ao bug
 * Erros comuns com useState · 8 min
 *
 * Para rodar este arquivo, em exercicios/ativo.js:
 * export { default } from './05-usestate-caca-ao-bug';
 *
 * Este código tem 4 bugs. O arquivo já é o App com os erros.
 * Corrija aqui mesmo, um por vez.
 *
 * 1. Leia sem rodar e marque as linhas suspeitas.
 * 2. Agora rode. Qual erro aparece primeiro?
 * 3. Conserte um por vez e rode de novo.
 * 4. No fim: os 3 botões funcionam e a lista cresce.
 *
 * Dica: slide "Erros comuns com useState" da aula gravada.
 */

import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function App() {
  const [notas, setNotas] = useState(0);
  const [lista, setLista] = useState([]);

  setNotas(1);

  function somar() {
    notas = notas + 1;
  }

  function anotar() {
    lista.push({ id: Date.now(), texto: 'Nota ' + (lista.length + 1) });
    setLista(lista);
  }

  return (
    <View style={{ flex: 1, padding: 24, paddingTop: 60, gap: 12 }}>
      <Text>📝 {notas} notas</Text>
      <Button title="+1 nota" onPress={somar} />
      <Button title="Zerar" onPress={setNotas(0)} />
      <Button title="Anotar na lista" onPress={anotar} />
      {lista.map((n) => (
        <Text key={n.id}>• {n.texto}</Text>
      ))}
    </View>
  );
}
