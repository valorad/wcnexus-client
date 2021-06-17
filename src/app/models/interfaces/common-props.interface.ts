import { IElementStyleStore } from "./element.interface";

export interface ICommomProps {
  children?: {
    [k: string]: ICommomProps
  },
  styles?: {
    [k: string]: IElementStyleStore
  }
}