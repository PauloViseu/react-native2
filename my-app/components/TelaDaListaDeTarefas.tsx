import { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import Input from './Input';
import ListaDeTarefas from './ListaDeTarefas';

export default function TelaDaListaDeTarefas() {
  const [tarefa, setTarefa] = useState<string>('');
  const [tarefas, setTarefas] = useState<string[]>([]);

  const adicionarTarefa = () => {
    if (tarefa.trim()) {
      setTarefas([...tarefas, tarefa]);
      setTarefa('');
    }
  };

  return (
    <View style={styles.container}>
      <Input
        value={tarefa}
        onChange={setTarefa}
        placeholder="Informe a tarefa"
      />

      <Button title="Adicionar" onPress={adicionarTarefa} />

      <ListaDeTarefas tarefas={tarefas} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  }
});
