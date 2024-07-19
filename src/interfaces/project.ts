export interface IProject {
  id?: string;
  title: string;
  desc: string;
  imageURL: string;
  images?: string[];
  status: boolean;
  sourceLink?: string;
  demoLink?: string;
  techIds?: string[];
}
