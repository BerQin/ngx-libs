import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEchartsLibModule } from 'ngx-echarts-lib';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxEchartsLibModule.forRoot()
  ],
  exports: [
    NgxEchartsLibModule
  ]
})
export class SharedModule { }
