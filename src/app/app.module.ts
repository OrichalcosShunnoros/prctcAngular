import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CardProductComponent } from './components/card-product/card-product.component';

@NgModule({
  declarations: [
    CatalogoComponent,
    CardProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CatalogoComponent]
})
export class AppModule { }
