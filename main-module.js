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


export { MyFn }
