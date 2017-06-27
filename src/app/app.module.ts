import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {AppService} from './app.service';
import {Formexe} from './form.component';
@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent, Formexe],
  providers : [AppService],
  bootstrap:    [ AppComponent, Formexe]
})
export class AppModule { }
