import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContentfulService } from './services/contentful.service';
import { ElementsRendererService } from './services/elements-renderer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private page: any[];

  @ViewChild('container', { static: true })
  private container: ElementRef;

  constructor(
    private contentfulService: ContentfulService,
    private elementsRendererService: ElementsRendererService,
  ) {}

  ngOnInit() {
    this.contentfulService.getPage()
      .then((page: any) => {
        this.page = page;
        const el = this.elementsRendererService.createCustomElement(page);
        // (el as any).fields = element.fields;

        this.elementsRendererService.appendChild(this.container, el);

        console.log(page);
      })
  }
}
