import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BolaComponent } from './bola/bola.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    HomeComponent,
    LoginComponent,
    BolaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

