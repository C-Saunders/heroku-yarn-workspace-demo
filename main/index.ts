import { subtract } from 'local-lib'

function testSubtract(a: number, b: number): number {
  return subtract(a, b)
}

setInterval(() => console.log(`testSubtract(19, 3) = ${testSubtract(19, 3)}`), 1000)
