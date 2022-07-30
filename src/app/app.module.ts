import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { IndexComponentComponent } from './main/index-component/index-component.component';
import { LoginComponentComponent } from './main/login-component/login-component.component';
import { MainModule } from './main/main.module';
import { Error404Component } from './core/components/error404/error404.component';

@NgModule({
  declarations: [AppComponent, Error404Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
