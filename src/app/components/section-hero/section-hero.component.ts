import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ContentfulAsset } from 'src/app/interfaces/contentful-file';
import { ContentfulSys } from 'src/app/interfaces/contentful-item';
import { AbstractComponent } from 'src/app/interfaces/abstract-component';

interface HeroFields {
  title: string;
  backgroundImage: ContentfulAsset;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'epc-hero',
  templateUrl: './section-hero.component.html',
})
export class HeroComponent extends AbstractComponent {
  public static get is() {
    return 'epc-hero';
  }

  @Input()
  public sys: ContentfulSys;

  @Input()
  public fields: HeroFields;

  public get title(): string {
    return this.fields.title;
  }

  public get backgroundImage(): string {
    return `url('${this.fields.backgroundImage.fields.file.url}')`;
  }
}