type RemoveTwoDashes<T extends string> = T extends `--${infer Rest}` ? Rest : T

type CamelCase<S extends string> =
  S extends `${infer P1}-${infer P2}`
    ? `${P1}${CamelCase<Capitalize<P2>>}`
    : S

type FormatStyleVars<T> = {
  [K in keyof T as  CamelCase<RemoveTwoDashes<K & string>>]?: T[K];
} & T

interface BaseStyleVars {
  [key: PropertyKey]: string
}

export interface StyleVars extends FormatStyleVars<BaseStyleVars> {}