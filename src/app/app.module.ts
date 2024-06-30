import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApiModule } from './api.module';
import { Configuration } from './configuration';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ApiModule.forRoot(() => new Configuration())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
