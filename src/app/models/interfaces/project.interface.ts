import { ICommomProps } from './common-props.interface';
import { INexus } from './nexus.interface';

import { ITechListProps } from './techs.interface';

export interface IProject extends INexus {
  techs: INexus[],
}

export interface IProjectListProps extends ICommomProps {
  projects: IProject[]
}

export interface IProjectCaseProps extends ICommomProps {
  children: {
    projectList: IProjectListProps
  }
}

export interface IProjectDetailProps extends ICommomProps {
  project: IProject,
  children: {
    techList: ITechListProps
  }
}