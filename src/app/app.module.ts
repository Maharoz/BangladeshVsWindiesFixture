import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FixtureComponent } from './fixture/fixture.component';


@NgModule({
  declarations: [
    AppComponent,
    FixtureComponent,
    
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
