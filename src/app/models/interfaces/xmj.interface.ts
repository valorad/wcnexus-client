import { ICommomProps } from "./common-props.interface";

export interface IXMJListProps extends ICommomProps {
  xiaoMaJias: IXiaoMaJia[]
}

export interface IXiaoMaJia {
  name: string,
  image: string,
}