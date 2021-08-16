import { ICommomProps } from "./common-props.interface";
import { IInstanceCardProps } from "./instantcard.interface";
import { INexus } from "./nexus.interface";

export interface ITechListProps extends ICommomProps {
  techs: INexus[],
  cardStyle?: IInstanceCardProps["styles"],
}