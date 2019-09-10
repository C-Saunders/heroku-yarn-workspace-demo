import { subtract } from 'subtractorLibrary'

function testSubtract(a: number, b: number): number {
  return subtract(a, b)
}

console.log(`testSubtract(19, 3) = ${testSubtract(19, 3)}`)
