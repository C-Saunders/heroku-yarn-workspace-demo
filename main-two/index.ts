import { add } from 'local-lib'

function testAdd(a: number, b: number): number {
  return add(a, b)
}

setInterval(() => console.log(`testAdd(23, 3) = ${testAdd(23, 3)}`), 1000)
