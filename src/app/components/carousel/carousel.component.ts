import { Component, ChangeDetectionStrategy, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { AbstractComponent } from 'src/app/interfaces/abstract-component';
import { ContentfulItem } from 'src/app/interfaces/contentful-item';
import { ElementsRendererService } from 'src/app/services/elements-renderer.service';

interface CarouselFields {
  title: string;
  carouselItem: ContentfulItem[];
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'epc-carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent extends AbstractComponent {
  public static get is() {
    return 'epc-carousel';
  }

  @Input()
  public fields: CarouselFields;
}