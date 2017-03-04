export const backgroundForType = (type) => {
  switch (type) {
    case 'VERB':
      return '#4DC14B'

    case 'NOUN':
      return '#18206F'

    case 'ADJECTIVE':
      return '#D88373'

    case 'ADVERB':
      return '#D88373'

    case 'INTERJECTION':
      return '#5C573E'

    case 'PREPOSITION':
      return '#0C0F0A'

    default:
      return '#0C0F0A'
  }
}