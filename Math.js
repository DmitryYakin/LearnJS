//TODO Math Functions

// Math.round - обычное округление, как в математике

// Math.floor - округляет всегда в меньшую сторону даже если число 4.9

// Math.ceil - округляет в большую сторону

// Math.max()/.min() - maximum/minimum

// Math.pow() - возвести в степень

// Math.sqrt() - извлечь корень

// Math.random() - рандом - возвращает случаное число между 0 и единицей

let min = 1
let max = 10

const ranNum = Math.round(Math.random() * (max-min) + min)

console.log(ranNum)
