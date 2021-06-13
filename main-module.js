import { a } from '@my-scoped/my-module'


/** @type {import('__types').MyFn} */
function MyFn(f) {
  a.a = 'test'
  f = 'asd'
  return 1
}

/** @type {import('__types').MyFn2} */
function MyFn2(f) {
  return 'foo'
}

/**
 * @type {import('__types').MyFnOv}
 * @param {string} a
 * @param {number} b
 */
function MyFnOv(a, b) {
  MyFn(a, b)

  return 1
}

export { MyFn, MyFnOv }
