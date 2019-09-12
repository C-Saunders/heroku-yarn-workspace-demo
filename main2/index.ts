import { add } from 'local-lib'

function testAdd(a: number, b: number): number {
  return add(a, b)
}

setInterval(() => console.log(`testAdd(20, 3) = ${testAdd(20, 3)}`), 1000)
