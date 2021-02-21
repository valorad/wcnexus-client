export interface IElementStyleStore {
  [index: string]: string,
}

export interface IChildElementStore {
  [index: string]: {
    styles: IElementStyleStore
  },
}