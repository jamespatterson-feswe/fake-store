import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule, SaleBannerModule } from '@jamespatterson-feswe/components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    FooterModule,
    SaleBannerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
