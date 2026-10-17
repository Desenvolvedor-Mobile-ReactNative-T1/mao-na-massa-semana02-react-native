/**
 * Gabarito — Boas-vindas.
 *
 * Com [], o efeito roda uma vez, quando a tela monta.
 * Clicar muda o estado e renderiza de novo, mas a lista vazia
 * diz para não rodar outra vez. Por isso o alerta não volta.
 *
 * Sem o [], o efeito roda depois de todo render. Cada clique
 * mostra o alerta de novo. O arquivo final volta com [].
 *
 * Ao salvar, o Fast Refresh monta a tela outra vez e o alerta
 * aparece de novo. Isso é esperado.
 *
 * Para ver no Expo Go, em exercicios/ativo.js:
 * export { default } from '../gabarito/06-useeffect-boas-vindas';
 */

import { useEffect, useState } from "react";
import { Alert, Button, Text, View } from "react-native";

export default function App() {
  const [cliques, setCliques] = useState(0);

  useEffect(() => {
    console.log("A tela abriu!");
    Alert.alert("Bem-vindo");
  }, []);

  return (
    <View style={{ flex: 1, padding: 24, paddingTop: 60, gap: 12 }}>
      <Text>Cliques: {cliques}</Text>
      <Button title="Clicar" onPress={() => setCliques((atual) => atual + 1)} />
    </View>
  );
}
