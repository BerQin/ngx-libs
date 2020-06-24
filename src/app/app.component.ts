import { Component, OnInit } from '@angular/core';
import { NgxEchartsLibService } from 'ngx-bucket-echarts-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public chartService: NgxEchartsLibService
  ) {}

  ngOnInit() {
    this.chartService.initOption({
      // color: ['#000', '#ff0000', '#ddd', '#333']
    });
  }
}
