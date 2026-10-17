/**
 * Gabarito — Caça ao bug.
 *
 * 1. setNotas(1) no corpo do componente: o set roda a cada render
 *    e a tela entra em loop. O set fica só no onPress.
 * 2. notas = notas + 1 não muda estado. Use o set.
 * 3. push altera o array antigo e setLista(lista) entrega a mesma
 *    caixa. Crie um array novo com spread.
 * 4. onPress={setNotas(0)} chama o set na hora do render.
 *    A função tem que ir dentro de uma arrow.
 *
 * Para ver no Expo Go, em exercicios/ativo.js:
 * export { default } from '../gabarito/05-usestate-caca-ao-bug';
 */

import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function App() {
  const [notas, setNotas] = useState(0);
  const [lista, setLista] = useState([]);

  function somar() {
    setNotas((atual) => atual + 1);
  }

  function anotar() {
    setLista([
      ...lista,
      { id: Date.now(), texto: "Nota " + (lista.length + 1) },
    ]);
  }

  return (
    <View style={{ flex: 1, padding: 24, paddingTop: 60, gap: 12 }}>
      <Text>📝 {notas} notas</Text>
      <Button title="+1 nota" onPress={somar} />
      <Button title="Zerar" onPress={() => setNotas(0)} />
      <Button title="Anotar na lista" onPress={anotar} />
      {lista.map((n) => (
        <Text key={n.id}>• {n.texto}</Text>
      ))}
    </View>
  );
}
