# NgxEchartsLib

对echart进行了封装，拥有默认主题可修改主题等

## Directive【ngxeCharts】
### 参数
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `[options]` | 放入需要修改的echart属性即可 | `{[key: string]: any}` | - |
| `[widthDifference]` | 宽度回收值 | `number` | 0 |

### 事件
| 事件名称 | 说明 | 返回值 |
| --- | --- | --- | --- |
| `(chartClick)` | 放入需要修改的echart属性即可 | `event` |
| `(chartMouseover)` | 放入需要修改的echart属性即可 | `event` |
| `(afterChartView)` | chart加载完成后的回调函数 | `Chart` |

## 使用

### 引入

```ts
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
```

### 使用

```html
 <div class="chart-box">
  <div class="chart" ngxeCharts (chartClick)="clickChart($event)" (afterChartView)="afterChart($event)" [options]="options1" ></div>
</div>
```

```ts
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
}
```