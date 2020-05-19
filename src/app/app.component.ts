import { Component } from '@angular/core';
import { NgxEchartsLibService } from 'ngx-echarts-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-libs';
  constructor(
    public chartService: NgxEchartsLibService
  ) {
    this.chartService.initOption({
      color: ['#000', '#ff0000', '#ddd', '#333']
    });
  }
}
