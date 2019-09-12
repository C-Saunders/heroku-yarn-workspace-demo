import { add } from 'local-lib'

function testAdd(a: number, b: number): number {
  return add(a, b)
}

setInterval(() => console.log(`testSubtract(19, 3) = ${testAdd(19, 3)}`), 10000)
