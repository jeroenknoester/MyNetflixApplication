import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { HeadermenuComponent } from './components/headermenu/headermenu.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ThumbnailComponent } from './components/video/thumbnail/thumbnail.component';
import { VideoComponent } from './components/video/video.component';
import { VideotestcomponentComponent } from './components/videotestcomponent/videotestcomponent.component';
import { SafePipe } from './pipes/safe.pipe';
import { IAppState } from './store/app-state.interface';
import { rootReducer } from './store/app.reducer';
import { VideoEffects } from './store/video/video.effects';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    VideotestcomponentComponent,
    HeadermenuComponent,
    HomeComponent,
    VideoComponent,
    ThumbnailComponent,
    SafePipe,
    AddVideoComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    EffectsModule.forRoot([ VideoEffects ]),
    StoreModule.forRoot<IAppState>(rootReducer),
    StoreDevtoolsModule.instrument()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
