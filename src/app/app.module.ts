import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxEchartsLibModule } from 'ngx-bucket-echarts-lib';
import { EchartTestComponent } from './echart-test/echart-test.component';

@NgModule({
  declarations: [
    AppComponent,
    EchartTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsLibModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
