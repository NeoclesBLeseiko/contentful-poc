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

  getPage(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.page,
      'fields.sku[en]': 'UkoMQVjerwjBUOMeJhH76',
      include: 2,
    }, query))
    // return this.cdaClient.getEntries()
    .then(res => res.items);
  }
}
