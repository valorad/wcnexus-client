import { ICommomProps } from "./common-props.interface";
import { IGameWallProps } from "./game-wall.interface";

export interface IWelcomeProps extends ICommomProps {
  children: {
    gameWall: IGameWallProps
  }
}