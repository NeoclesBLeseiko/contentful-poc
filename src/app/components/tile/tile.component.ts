import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ContentfulAsset } from 'src/app/interfaces/contentful-file';
import { AbstractComponent } from 'src/app/interfaces/abstract-component';

interface TileFields {
  title: string;
  backgroundImage: ContentfulAsset;
  link: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'epc-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent extends AbstractComponent {
  public static get is() {
    return 'epc-tile';
  }

  @Input()
  public fields: TileFields;

  public get isVideo(): boolean {
    return this.fields.backgroundImage.fields.file.contentType.includes('mp4');
  }

  public get backgroundImage(): string {
    return `url('${this.fields.backgroundImage.fields.file.url}')`;
  }
}