import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FreeSVGSComponent } from './free-svgs/free-svgs.component';
import { SvgDetailComponent } from './svg-detail/svg-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FreeSVGSComponent,
    SvgDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
