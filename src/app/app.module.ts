import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideotestcomponentComponent } from './components/videotestcomponent/videotestcomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { HeadermenuComponent } from './components/headermenu/headermenu.component';

@NgModule({
  declarations: [
    AppComponent,
    VideotestcomponentComponent,
    HeadermenuComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
