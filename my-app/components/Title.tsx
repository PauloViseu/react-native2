import { Text, StyleSheet } from 'react-native'

interface TitleProps {
  texto: string
}

export default function Title({ texto }: TitleProps) {
  return <Text style={styles.title}>{texto}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
})
