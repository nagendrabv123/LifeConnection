import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeScreenComponent } from './home-screen/home-screen.component';
import { PawServicesComponent } from './paw-services/paw-services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ViewAllPawsComponent } from './view-all-paws/view-all-paws.component';
import { ViewPawComponent } from './view-paw/view-paw.component';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AuthInterceptor } from './auth.interceptor';
import { GlobleErrorHandlerService } from './globle-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    PawServicesComponent,
    AboutUsComponent,
    NotificationsComponent,
    ViewAllPawsComponent,
    ViewPawComponent
  ],
  entryComponents: [ViewPawComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: GlobleErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
