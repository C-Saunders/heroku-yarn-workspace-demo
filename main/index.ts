import { subtract } from 'local-lib'

function testSubtract(a: number, b: number): number {
  return subtract(a, b)
}

setInterval(() => console.log(`testSubtract(20, 3) = ${testSubtract(20, 3)}`), 1000)
