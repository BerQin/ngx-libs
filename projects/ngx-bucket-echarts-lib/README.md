# NgxEchartsLib

对echart进行了封装，拥有默认主题可修改主题等

## 使用说明

### 安装
```javascript
npm i ngx-bucket-echarts-lib
```

### 内容介绍
关于本插件的所有暴露属性，方法指令。

| 暴露内容 | 说明 | 类型 |
| --- | --- | --- |
| `NgxEchartsLibModule` | Module类导出 | `Module` |
| `ngxeCharts` | 基础chart图指令 | `Directive` |
| `ngxeChartSimplify` | 简化chart图指令，用于缩略图的显示完美支持`line`,`bar`其他类型图表只能正常显示，对数据进行简化 | `Directive` |
| `WordCloudChart` | 用于创建词云图的创建类 | `Class` |
| `Chart` | Chart的Interfa定义接口，类型规范，可以应用于数据规范 | `Interface` |

### 引入
```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';

import { NgxEchartsLibModule } from 'ngx-bucket-echarts-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsLibModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 在HTML中使用
在HTML中加入指令，就可以开始使用本插件，提供的快捷chart图设置

```html
 <div class="chart-box">
  <div class="chart" ngxeCharts (chartClick)="clickChart($event)" (afterChartView)="afterChart($event)" [options]="options" ></div>
</div>
```
```javascript
export class EchartLibComponent implements OnInit {
  public options = {
    yAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'bar'
    }]
  };
  constructor(
    public chartService: NgxEchartsLibService
  ) {
  }

  ngOnInit() {
    // 可全局统一设置颜色等统一的主题样式传入Chart类别
  
    // this.chartService.initOption({
    //   color: ['#000', '#ff0000', '#ddd', '#333']
    // });
  }

  clickChart(ev: Event) {
    console.log(ev);
  }

  afterChart(chart) {
    chart.on('contextmenu', (e) => {
      console.log(e, 1);
    });
  }
}
```

## Directive【ngxeCharts】
### 参数
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `[options]` | 放入需要修改的echart属性即可 | `{[key: string]: any}` | - |
| `[widthDifference]` | 宽度回收值，调整图表和容器的容错 | `number` | 0 |

### 事件
| 事件名称 | 说明 | 返回值 |
| --- | --- | --- |
| `(chartClick)` | 放入需要修改的echart属性即可 | `event` |
| `(chartMouseover)` | 放入需要修改的echart属性即可 | `event` |
| `(afterChartView)` | chart加载完成后的回调函数 | `Chart` |

## service NgxEchartsLibService
chart图的服务方法

| 方法名称 | 说明 | 返回值 |
| --- | --- | --- |
| `initOption` | 对主题进行全局设定 | `void` |

## 创建字符云
```javascript
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

### new WordCloudChart 接受对象属性
| 名称 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `setData` | 字符云的数据集`{value: number, name: string}` | `Array<{value: number, name: string}>` | [] |
| `color` | 字符颜色 | `string | string[]` | Famart |
| `sizeRange` | 字符大小区间 | `number[]` | `[10, 140]` |
| `emphasis` | 设置重点样式 | 同echart.emphasis(请自行查看<a href="https://echarts.apache.org/zh/option.html#legend.emphasis">https://echarts.apache.org/zh/option.html#legend.emphasis</a>) | - |
| `fontFamily` | 字体 | `string` | `sans-serif` |
| `fontWeight` | 是否加粗 | `'normal' \ | 'bold' \| 'bolder' \| 'lighter'` | `bold` |

## Directive【ngxeChartSimplify】
仅仅有效支持`line`和`bar`类型的图表

## 创建缩略图
用于生成简单的数据取样缩略图表，配置同普通图表的指令

## 使用在HTML中的区别
其他设置都和基础指令的内容保持一致，扩展属性请查看下面的属性介绍

```html
 <div class="chart-box">
  <div class="chart" ngxeChartSimplify [options]="options" ></div>
</div>
```

### 新增属性
| 名称 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `forceNum` | 数据的取样力度 设置`0`,小于`0`返回全部的点图样 | `number` | 3 |

## Interface [Chart]
请参考官方配置手册<a href="https://echarts.apache.org/zh/option.html#title">https://echarts.apache.org/zh/option.html#title</a>

源文件请产考

gitHub <a href="https://github.com/BerQin/ngx-libs/blob/master/projects/ngx-bucket-echarts-lib/src/lib/chart-libs/chart.ts">https://github.com/BerQin/ngx-libs/blob/master/projects/ngx-bucket-echarts-lib/src/lib/chart-libs/chart.ts<a>