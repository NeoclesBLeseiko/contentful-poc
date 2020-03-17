import { Component, ChangeDetectionStrategy, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { AbstractComponent } from 'src/app/interfaces/abstract-component';
import { ContentfulItem } from 'src/app/interfaces/contentful-item';
import { ElementsRendererService } from 'src/app/services/elements-renderer.service';

interface PageFields {
  title: string;
  sections: ContentfulItem[];
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'epc-page',
  template: '',
})
export class PageComponent extends AbstractComponent implements OnInit {
  public static get is() {
    return 'epc-page';
  }

  @Input()
  public fields: PageFields;

  constructor(
    private renderer: ElementsRendererService,
    private elRef: ElementRef, 
  ) {
    super();
  }

  public ngOnInit() {
    this.renderFields();
  }

  private renderFields() {
    this.fields.sections.forEach((item: ContentfulItem) => {
      const element = this.renderer.createCustomElement(item);

      this.renderer.appendChild(this.elRef, element);
    });
  }
}