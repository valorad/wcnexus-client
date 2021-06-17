import { ICommomProps } from "./common-props.interface";

export interface ITextDisplayProps extends ICommomProps {
  content: string,
  throttle: number,
}