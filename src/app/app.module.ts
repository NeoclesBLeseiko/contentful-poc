import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { PageComponent } from './components/page/page.component';
import { HeroComponent } from './components/section-hero/section-hero.component';
import { TileComponent } from './components/tile/tile.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    PageComponent,
    HeroComponent,
    TileComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    GridComponent,
    PageComponent,
    HeroComponent,
    TileComponent,
    CarouselComponent,
  ],
})
export class AppModule {
  constructor(private injector: Injector) {
    const elements: any[] = [
      [GridComponent, GridComponent.is ],
      [PageComponent, PageComponent.is],
      [HeroComponent, HeroComponent.is],
      [TileComponent, TileComponent.is],
      [CarouselComponent, CarouselComponent.is]
    ];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el as any);
    }
  }

  ngDoBootstrap() {
  }
}
