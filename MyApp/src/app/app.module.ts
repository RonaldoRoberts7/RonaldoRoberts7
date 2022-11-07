import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
@NgModule({
  imports: [BrowserModule,AppRoutingModule],
  declarations: [AppComponent, HelloComponent],
  providers: [],
  bootstrap: [HelloComponent]
})
export class AppModule { }
