export interface ContentfulSys {
  id: string;
  type: 'Entry' | 'Link' | 'Asset';
  linktType?: string;
  contentType?: ContentfulSys;
}

export interface ContentfulItem {
  sys: ContentfulSys;
  fileds: any;
}
