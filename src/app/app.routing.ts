import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EchartLibComponent } from './echart-lib/echart-lib.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'echarts',
    pathMatch: 'full'
  },
  {
    path: 'echarts',
    component: EchartLibComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
