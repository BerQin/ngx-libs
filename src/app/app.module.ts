import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { EchartLibComponent } from './echart-lib/echart-lib.component';
import { NgxEchartsLibModule } from 'ngx-echarts-lib';

@NgModule({
  declarations: [
    AppComponent,
    EchartLibComponent
  ],
  imports: [
    NgxEchartsLibModule.forRoot(),
    // SharedModule,
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
