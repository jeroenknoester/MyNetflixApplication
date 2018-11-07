import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideotestcomponentComponent } from './components/videotestcomponent/videotestcomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { HeadermenuComponent } from './components/headermenu/headermenu.component';
import { HomeComponent } from './components/home/home.component';
import { VideoComponent } from './components/video/video.component';
import { ThumbnailComponent } from './components/video/thumbnail/thumbnail.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VideotestcomponentComponent,
    HeadermenuComponent,
    HomeComponent,
    VideoComponent,
    ThumbnailComponent,
    SafePipe
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
