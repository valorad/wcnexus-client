import { ICommomProps } from "./common-props.interface";
import { INexus } from "./nexus.interface";

export interface ITechListProps extends ICommomProps {
  techs: INexus[]
}