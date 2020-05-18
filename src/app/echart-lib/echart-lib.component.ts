import { Component, OnInit } from '@angular/core';
import { NgxEchartsLibService } from 'ngx-echarts-lib';


@Component({
  selector: 'app-echart-lib',
  templateUrl: './echart-lib.component.html',
  styleUrls: ['./echart-lib.component.scss']
})
export class EchartLibComponent implements OnInit {

  public options1 = {
    xAxis: {
        type: 'value',
        boundaryGap: false
    },
    yAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'bar',
        areaStyle: {}
    }]
  };

  public options2 = {
    legend: {
      data: ['2的指数', '3的指数', '1/2的指数']
    },
    xAxis: {
      type: 'category',
      data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
    },
    series: [
      {
        name: '3的指数',
        type: 'line',
        data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
      },
      {
        name: '2的指数',
        type: 'line',
        data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
      },
      {
        name: '1/2的指数',
        type: 'line',
        data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512]
      }
    ]
  };

  constructor(
    public chartService: NgxEchartsLibService
  ) {
  }

  ngOnInit() {
    console.log(this.chartService.comonOption);
  }

  afterChart(chart) {
    chart.on('contextmenu', (e) => {
      console.log(e, 1);
    });
  }

  clickChart(e) {
    console.log(e);
  }

}
