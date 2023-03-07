function isFibonacci(number) {
  let a = 0, b = 1, c = 1

  while (c < number) {
    // Caso queira visualizar a sequência, basta descomentar a próxima linha
    // console.log(c) 

    a = b
    b = c
    c = a + b
  }

  if (c === number) {
    return true
  } else {
    return false
  }
}

const number = 13;

if (isFibonacci(number)) {
  console.log(`${number} pertence à sequência de Fibonacci.`)
} else {
  console.log(`${number} não pertence à sequência de Fibonacci.`)
}