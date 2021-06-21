import { ICommomProps } from "./common-props.interface";
import { INexus } from "./nexus.interface";

export interface IGameWallProps extends ICommomProps {
  games: INexus[]
}