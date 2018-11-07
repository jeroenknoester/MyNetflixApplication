import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { HeadermenuComponent } from './components/headermenu/headermenu.component';
import { HomeComponent } from './components/home/home.component';
import { ThumbnailComponent } from './components/video/thumbnail/thumbnail.component';
import { VideoComponent } from './components/video/video.component';
import { VideotestcomponentComponent } from './components/videotestcomponent/videotestcomponent.component';
import { SafePipe } from './pipes/safe.pipe';
import { IAppState } from './store/app-state.interface';
import { rootReducer } from './store/app.reducer';



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
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([ VideoEffects ]),
    StoreModule.forRoot<IAppState>(rootReducer),
    StoreDevtoolsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
