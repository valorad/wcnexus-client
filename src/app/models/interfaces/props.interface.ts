export interface IElementStyleStore {
  [index: string]: string,
}

export interface IChildElementStore {
  [index: string]: {
    styles: IElementStyleStore
  },
}

export interface IInstanceCardProps {
  image: string,
  name: string,
  children: Partial<IInstanceCardChildren>,
}

export interface IInstanceCardChildren extends IChildElementStore {
  image: {
    styles: IElementStyleStore
  },
  title: {
    styles: IElementStyleStore
  }
}