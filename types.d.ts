declare module '__types' {

  /** This is function MyFn */
  export interface MyFn {
    (f: number): string
  }

  export interface MyFnOv {
    (a: string, b: number): string
    (a: string | number): string
    (): number
  }

}


