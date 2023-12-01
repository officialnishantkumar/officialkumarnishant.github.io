import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CaroselComponent } from './carosel/carosel.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { router, routes } from './app.router';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';

import { UserService } from './user.service';
import { RestapiComponent } from './restapi/restapi.component';
import { CourseJavaComponent } from './course-java/course-java.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CaroselComponent,
    MainContentComponent,
    FooterComponent,
    ContactComponent,
    RegistrationComponent,
    RestapiComponent,
    CourseJavaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routes,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
