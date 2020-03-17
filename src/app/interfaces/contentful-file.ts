import { ContentfulSys } from './contentful-item';

export interface ContentfulAsset {
  sys: ContentfulSys;
  fields: {
    title: string;
    file: ContentfulImage;
  }
}


export interface ContentfulImage {
  title: string;
  url: string;
  details: any;
  fileName: string;
  contentType: string;
}