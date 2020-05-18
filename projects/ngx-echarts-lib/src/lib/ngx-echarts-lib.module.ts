import { NgModule, ModuleWithProviders } from '@angular/core';
import { ChartsDirective } from './charts.directive';

import { NgxEchartsLibService } from './ngx-echarts-lib.service';

@NgModule({
  declarations: [
    ChartsDirective
  ],
  imports: [
  ],
  exports: [
    ChartsDirective
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
