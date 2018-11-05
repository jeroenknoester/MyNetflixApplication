import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { HeadermenuComponent } from './components/headermenu/headermenu.component';
import { HomeComponent } from './components/home/home.component';
import { ThumbnailComponent } from './components/video/thumbnail/thumbnail.component';
import { VideoComponent } from './components/video/video.component';
import { VideotestcomponentComponent } from './components/videotestcomponent/videotestcomponent.component';
import { SafePipe } from './pipes/safe.pipe';
import { IAppState } from './store/app-state.interface';
import { rootReducer } from './store/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { VideoBoxComponent } from './components/video-box/video-box.component';
import { VideoListComponent } from './components/video-list/video-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VideotestcomponentComponent,
    HeadermenuComponent,
    HomeComponent,
    VideoComponent,
    ThumbnailComponent,
    SafePipe,
    VideoBoxComponent,
    VideoListComponent,

  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    StoreModule.forRoot<IAppState>(rootReducer),
    StoreDevtoolsModule.instrument()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
