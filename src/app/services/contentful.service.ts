import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: '6dlma0hsr512',
  accessToken: 'fu2gEx7AW9zwJsgRu1HbvyPbXooYJYUp9f_1ILGgy2g',

  contentTypeIds: {
    page: 'epcPage'
  }
}

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  getPage(query?: object): Promise<Entry<any>> {
    return this.cdaClient.getEntry('4nCrKxMzEFNK1VDjA30YgE', { include: 2 })
      .then(res => res);
  }
}
