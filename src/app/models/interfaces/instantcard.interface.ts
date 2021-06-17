import { ICommomProps } from './common-props.interface';
import { IElementStyleStore } from './element.interface';

export interface IInstanceCardProps extends ICommomProps {
  image: string,
  name: string,
  styles: {
    image?: IElementStyleStore,
    title?: IElementStyleStore,
  }
}