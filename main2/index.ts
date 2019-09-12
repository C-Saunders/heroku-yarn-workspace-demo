import { add } from 'local-lib'

function testAdd(a: number, b: number): number {
  return add(a, b)
}

console.log(`testAdd(19, 3) = ${testAdd(19, 3)}`)
