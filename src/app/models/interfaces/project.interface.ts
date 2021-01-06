import { INexus } from './nexus.interface';
import { IPhoto } from './photo.interface';

export interface IProject extends INexus {
  techs: INexus[],
  images: IPhoto[],
}