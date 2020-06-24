import { Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { ChartsDirective } from './charts.directive';
import { NgxEchartsLibService } from './ngx-echarts-lib.service';
import { Chart, EchartYAxis, EchartXAxis, EchartTextStyle } from './chart-libs/chart';

import * as echarts from 'echarts';

@Directive({
  selector: '[ngxeChartSimplify]'
})
export class ChartSimplifyDirective extends ChartsDirective  implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  public SetOption: Chart = {};

  @Input() set options(value: Chart) {
    this.SetOption = value || {};
    this._Options = this.chartService.creatOption(value);
    this.clearOption();
  }

  get options(): Chart {
    return this._Options;
  }

  constructor(
    public chartService: NgxEchartsLibService,
    public el: ElementRef
  ) {
    super(chartService, el);
  }

  clearOption() {
    const type = this._Options.series[0].type;
    if (type === 'line' || type === 'bar' || type === 'scatter') {
      if ((<EchartXAxis[]>this._Options.xAxis).length) {
        (<EchartXAxis[]>this._Options.xAxis).map(res => {
          res.show = false;
        });
      } else {
        (<EchartXAxis>this._Options.xAxis).show = false;
      }

      if ((<EchartYAxis[]>this._Options.yAxis).length) {
        (<EchartYAxis[]>this._Options.yAxis).map(res => {
          res.show = false;
        });
      } else {
        (<EchartYAxis>this._Options.yAxis).show = false;
      }
    }

    this.findKeyInJson(this._Options);
    this.setStyle();
  }

  findKeyInJson(json: any): void {
    if (typeof json !== 'object') {
      return;
    }
    for (const key in json) {
      if (json[key]) {
        const value = json[key];
        if (typeof value === 'object') {
          if (Array.isArray(value)) {
            if (key === 'data') {
              json[key] = this.clearData(value, this.forceNum);
            } else {
              value.map(res => {
                this.findKeyInJson(res);
              });
            }
          } else {
            this.findKeyInJson(value);
          }
        }
      }
    }
  }

  clearData(data: Array<any>, forceNum: number): Array<any>  {
    if (forceNum && forceNum > 1 && data.length > forceNum * 4) {
      const arr = [];
      data.map((res, index) => {
        if (index % forceNum === 0) {
          arr.push(res);
        }
      });

      return arr;
    } else {
      return data;
    }
  }

  setStyle() {
    // 设置默认样式
    if (this._Options.series.length) {
      const type = this._Options.series[0].type;
      if (type === 'line' || type === 'bar') {
        this._Options.tooltip.trigger = this.SetOption.tooltip
        ? this.SetOption.tooltip.trigger
        ? this.SetOption.tooltip.trigger : 'axis' : 'axis';
      }
    }

    this._Options.grid = this.SetOption.grid || {
      left: '0',
      right: '0',
      bottom: '0',
      top: '0'
    };

    // 颜色渐变设置
    this._Options.series.map((res, index) => {
      if (res.type === 'line') {
        if (!res.areaStyle) {
          res.areaStyle = {};
        }
        const setOtionItem = this.SetOption.series[index];
        (<EchartTextStyle>res.areaStyle).color = setOtionItem.areaStyle
        ? (<EchartTextStyle>setOtionItem.areaStyle).color
        || this.colorGet(this._Options.color, index)
        :  this.colorGet(this._Options.color, index);

        res.smooth =  typeof setOtionItem.smooth === 'boolean' ? setOtionItem.smooth : true;
      }
    });
  }

  colorGet(colors: string[], index): any {
    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      offset: 0,
      color: colors[(colors.length) % (index + 1)]
    }, {
      offset: 1,
      color: '#fff'
    }]);
  }
}
