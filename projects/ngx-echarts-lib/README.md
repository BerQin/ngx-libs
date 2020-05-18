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
| --- | --- | --- |
| `(chartClick)` | 放入需要修改的echart属性即可 | `event` |
| `(chartMouseover)` | 放入需要修改的echart属性即可 | `event` |
| `(afterChartView)` | chart加载完成后的回调函数 | `Chart` |

## service NgxEchartsLibService
| 方法名称 | 说明 | 返回值 |
| --- | --- | --- |
| `initOption` | 对主题进行重新定义 | `null` |


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
## 创建字符云

```ts
this.cloud = new WordCloudChart({
  sizeRange: [40, 160],
  setData: [
    {
      name: 'Farrah Abraham',
      value: 66
    },
    {
      name: 'asd',
      value: 366
    },
    {
      name: 'qwe',
      value: 136
    },
    {
      name: 'dfg',
      value: 310
    },
    {
      name: 'qfv',
      value: 240
    }
  ]
});
```

## 模版正常使用

```html
 <div class="chart-box">
  <div class="chart" ngxeCharts [options]="cloud" ></div>
</div>
```

### 属性与文档
| 名称 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `setData` | 字符云的数据集`{value: number, name: string}` | `Array<{value: number, name: string}>` | [] |
| `color` | 字符颜色 | `string | string[]` | Famart |
| `sizeRange` | 字符大小区间 | `number[]` | `[10, 140]` |
| `emphasis` | 设置重点样式 | 同echart.emphasis(请自行查看<a href="https://echarts.apache.org/zh/option.html#legend.emphasis">https://echarts.apache.org/zh/option.html#legend.emphasis</a>) | - |
| `fontFamily` | 字体 | `string` | `sans-serif` |
| `fontWeight` | 是否加粗 | `'normal' \ | 'bold' \| 'bolder' \| 'lighter'` | `bold` |