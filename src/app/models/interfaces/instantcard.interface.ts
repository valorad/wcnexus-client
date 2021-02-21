import { IChildElementStore, IElementStyleStore } from './element.interface';

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