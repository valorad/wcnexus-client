import { IPhoto } from './photo.interface';

export interface INexus {
  id?: string, // optional because we usually ask for dbname instead of _id
  dbname: string,
  name: string,
  description: string,
  url: string,
  type: string,
  cover: string,
  avatar: string,
  photos: IPhoto[],
}