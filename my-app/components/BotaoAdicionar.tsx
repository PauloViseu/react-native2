import { Button } from 'react-native'

interface BotaoAdicionarProps {
  onPress: () => void
}

export default function BotaoAdicionar({ onPress }: BotaoAdicionarProps) {
  return <Button title="Adicionar" onPress={onPress} />
}
