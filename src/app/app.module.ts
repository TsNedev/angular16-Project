import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  provideAppCheck,
} from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {
  getRemoteConfig,
  provideRemoteConfig,
} from '@angular/fire/remote-config';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { GalleryModule } from './gallery/gallery.module';
import { UsersModule } from './users/users.module';
import { ApiService } from './api.service';
import { AutService } from './services/aut.service';
import { ModelsModule } from './models/models.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, MainComponent],
  imports: [
    BrowserModule,

    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'angular16-44884',
        appId: '1:142546044370:web:4a05f3f6af42baa8dff40b',
        storageBucket: 'angular16-44884.appspot.com',
        apiKey: 'AIzaSyAwF0p273d2xHDfyxk9N8XXFPQUsVead_Q',
        authDomain: 'angular16-44884.firebaseapp.com',
        messagingSenderId: '142546044370',
      })
    ),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    provideRemoteConfig(() => getRemoteConfig()),
    FormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    GalleryModule,
    UsersModule,
    ModelsModule,
    AppRoutingModule,
  ],
  providers: [ScreenTrackingService, UserTrackingService, AutService],
  bootstrap: [AppComponent],
})
export class AppModule {}
