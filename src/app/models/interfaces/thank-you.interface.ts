import { ICommomProps } from "./common-props.interface";
import { INexus } from "./nexus.interface";

export interface IThankYouProps extends ICommomProps {
  nextSites: INexus[],
  socialMedia: INexus[],
}