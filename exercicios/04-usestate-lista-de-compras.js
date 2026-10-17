/**
 * Gabarito — Exercício 4, lista de compras.
 * Inclui o desafio extra.
 *
 * Para ver no Expo Go, em exercicios/ativo.js:
 * export { default } from '../gabarito/04-usestate-lista-de-compras';
 */

import { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";

export default function App() {
  const [item, setItem] = useState("");
  const [itens, setItens] = useState([]);

  function adicionar() {
    if (item.trim() === "") {
      Alert.alert("Ops", "Digite um item antes de adicionar.");
      return;
    }

    setItens([...itens, { id: Date.now(), nome: item.trim() }]);
    setItem("");
  }

  function remover(id) {
    setItens(itens.filter((atual) => atual.id !== id));
  }

  return (
    <View style={{ flex: 1, padding: 24, paddingTop: 60, gap: 12 }}>
      <Text>🛒 Lista de compras ({itens.length})</Text>
      <TextInput
        value={item}
        onChangeText={setItem}
        placeholder="Ex.: pão"
        style={{ borderWidth: 1, padding: 12 }}
      />
      <Button title="Adicionar" onPress={adicionar} />
      {itens.length === 0 && <Text>Sua lista está vazia.</Text>}
      {itens.map((atual) => (
        <View key={atual.id} style={{ gap: 4 }}>
          <Text>• {atual.nome}</Text>
          <Button title="Remover" onPress={() => remover(atual.id)} />
        </View>
      ))}
    </View>
  );
}
