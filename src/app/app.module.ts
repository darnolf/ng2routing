import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { NavBarComponent }  from './navbar.component';
import { appRoutes }  from './routes';
import { Page1Component } from './page1.component';
import { Page2Component } from './page2.component';
import { Page3Component } from './page3.component';

@NgModule({
  imports: [
     BrowserModule, 
     RouterModule.forRoot(appRoutes)
    
  ],
  declarations: [ 
    AppComponent,
    NavBarComponent,
    Page1Component,
    Page2Component,   
    Page3Component  
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
