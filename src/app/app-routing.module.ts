import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EchartTestComponent } from './echart-test/echart-test.component';

const routes: Routes = [
  {
    path: '',
    component: EchartTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
