import { NgModule, ModuleWithProviders } from '@angular/core';
import { ChartsDirective } from './charts.directive';

import { NgxEchartsLibService } from './ngx-echarts-lib.service';
import { ChartSimplifyDirective } from './chart-simplify.directive';

@NgModule({
  declarations: [
    ChartsDirective,
    ChartSimplifyDirective
  ],
  exports: [
    ChartsDirective,
    ChartSimplifyDirective
  ]
})

export class NgxEchartsLibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxEchartsLibModule,
      providers: [
        NgxEchartsLibService
      ]
    };
  }
}
