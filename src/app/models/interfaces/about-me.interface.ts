import { ICommomProps } from "./common-props.interface";
import { IXMJListProps } from "./xmj.interface";

export interface IAboutMeProps extends ICommomProps {
  children: {
    xmjList: IXMJListProps
  }
}