/**
 * Gabarito — Exercício 3, charada escondida.
 * Inclui o desafio extra.
 *
 * Para ver no Expo Go, em exercicios/ativo.js:
 * export { default } from '../gabarito/03-usestate-charada-escondida';
 */

import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function App() {
  const [mostrar, setMostrar] = useState(false);
  const [cliques, setCliques] = useState(0);

  function alternar() {
    setMostrar((atual) => !atual);
    setCliques((atual) => atual + 1);
  }

  return (
    <View style={{ flex: 1, padding: 24, paddingTop: 60, gap: 12 }}>
      <Text>O que é, o que é? Feito para andar e não anda.</Text>
      <Button
        title={mostrar ? "Esconder resposta" : "Mostrar resposta"}
        onPress={alternar}
      />
      {mostrar && <Text>A rua!</Text>}
      <Text>Cliques: {cliques}</Text>
    </View>
  );
}
