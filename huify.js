const consonants = 'бвгджзклмнпрстфхцчшщ'
const vowels = {
  а: 'я',
  е: 'е',
  ё: 'ё',
  и: 'и',
  о: 'е',
  у: 'ю',
  э: 'е',
  ю: 'ю',
  я: 'я',
  ы: 'и',
}

export const huify = message => {
  const text = message
    .replace(/(\r\n|\n|\r)/gm, ' ')
    .trim()
    .toLowerCase()

  const arrayOfWords = text.split(' ')
  const words = []

  arrayOfWords.forEach(function(word) {
    if (word.length > 3) {
      while (~consonants.indexOf(word[0])) {
        word = word.substr(1)
      }
      word = 'ху' + vowels[word[0]] + word.substr(1)
    }
    words.push(word)
  })

  return words.join(' ')
}
