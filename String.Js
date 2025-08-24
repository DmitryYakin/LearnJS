let sent = "A new sentence"

const doesIncludeNew = sent.includes('new') // Возвращает true, если нашло совпадение в строке и false, если не нашло

//console.log(doesIncludeNew)

//console.log(sent[3])

const startsWithA = sent.startsWith('A') // Проверка с чего начинается строка, если с того, что указали, то будет true 

const endsWithAA = sent.endsWith('A') // Тоже самое только смотрит чем заканчивается строка

let updatedSent = sent.replace('new', 'short') // Замена одного символа или слова в строке на другое ВАЖНО заменяет только первое встречно слово или символ, то есть
// если несколько одинаковых букв, то заменит только первую в другом случае надо через цикл делать

// console.log(updatedSent)

let sentSpace = " A new sentence "

trimmedSent = sentSpace.trim() // Убирает пробелы в начали и конце строки, также есть trimleft and trimright, чтобы убрать пробел в начале или в конце соответственно 

// console.log(trimmedSent)

const wordsInSent = sent.split(' ') //Превращает строку в массив строк, указав, что разделитель у нас пробел

// console.log(wordsInSent)

// .toLowerCase() toUpperCase() - привести всю строку либо к заглавным либо маленким буквам

