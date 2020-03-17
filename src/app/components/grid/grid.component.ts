import { Component, ChangeDetectionStrategy, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { AbstractComponent } from 'src/app/interfaces/abstract-component';
import { ContentfulItem } from 'src/app/interfaces/contentful-item';
import { ElementsRendererService } from 'src/app/services/elements-renderer.service';

interface GridFields {
  title: string;
  gridItem: ContentfulItem[];
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'epc-grid',
  templateUrl: './grid.component.html',
})
export class GridComponent extends AbstractComponent implements OnInit {
  public static get is() {
    return 'epc-grid';
  }

  @Input()
  public fields: GridFields;

  @ViewChild('container', { static: true })
  private container: ElementRef;

  constructor(
    private renderer: ElementsRendererService,
  ) {
    super();
  }

  public ngOnInit() {
    this.renderFields();
  }

  private renderFields() {
    this.fields.gridItem.forEach((item: ContentfulItem) => {
      const element = this.renderer.createCustomElement(item);
      element.classList.add('d-block');
      element.classList.add('col');

      this.renderer.appendChild(this.container, element);
    });
  }
}