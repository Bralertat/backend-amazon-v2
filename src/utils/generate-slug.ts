export function generateSlug(iputURL: string): string {
  const cyrillicToLatinMap: Record<string, string> = {
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ё: 'e',
    ж: 'zh',
    з: 'z',
    и: 'i',
    й: 'y',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'kh',
    ц: 'ts',
    ч: 'ch',
    ш: 'sh',
    щ: 'shch',
    ь: '',
    ы: 'y',
    ъ: '',
    э: 'e',
    ю: 'yu',
    я: 'ya'
  }

  const lowercaseString = iputURL.toLowerCase()

  let slug = ''
  for (let i = 0; i < lowercaseString.length; i++) {
    const char = lowercaseString[i]
    const transliteratedChar = cyrillicToLatinMap[char] || char
    slug += transliteratedChar
  }

  // Удалить все специальные символы и знаки препинания
  slug = slug.replace(/[^\w\s]/g, '')

  // Заменить пробелы на дефисы и удалить лишние дефисы
  slug = slug.replace(/\s+/g, '-').replace(/-+/g, '-')

  return slug
}