import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { ContentfulItem } from '../interfaces/contentful-item';

@Injectable({
  providedIn: 'root'
})
export class ElementsRendererService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
}

  public createCustomElement(item: any): HTMLElement {
    const html = this.renderer.createElement(this.toDashCase(item.sys.contentType.id || item.sys.contentType.sys.id));

    html.fields = item.fields;
    html.sys = item.sys;

    return html as HTMLElement;
  }

  public appendChild(parent, child) {
    this.renderer.appendChild(parent.nativeElement, child);
  }

  private toDashCase(key: string) {
    return key.split(/(?=[A-Z])/).join('-').toLowerCase()
  }
}
