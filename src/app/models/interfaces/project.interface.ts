import { ICommomProps } from './common-props.interface';
import { INexus } from './nexus.interface';
import { IPhoto } from './photo.interface';

export interface IProject extends INexus {
  techs: INexus[],
  images: IPhoto[],
}

export interface IProjectListProps extends ICommomProps {
  projects: IProject[]
}

export interface IProjectCaseProps extends ICommomProps {
  children: {
    projectList: IProjectListProps
  }
}