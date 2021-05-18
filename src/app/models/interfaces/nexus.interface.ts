export interface INexus {
  id?: string, // optional because we usually ask for dbname instead of _id
  dbname: string,
  name: string,
  description: string,
  url: string,
  logo: string,
  type: string,
}