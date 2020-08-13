import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import{DetailConfirmationService} from './services/detailConfirmationService';
import{ UserService } from './services/UserService';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsConfirmationComponent } from './details-confirmation/details-confirmation.component';
import { UserRegisterationComponent } from './user-registeration/user-registeration.component';
import { DownloadTicketComponent } from './download-ticket/download-ticket.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddFlightComponent } from './add-flight/add-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsConfirmationComponent,
    UserRegisterationComponent,
    DownloadTicketComponent,
    UserLoginComponent,
    AdminLoginComponent,
    AddFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DetailConfirmationService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
