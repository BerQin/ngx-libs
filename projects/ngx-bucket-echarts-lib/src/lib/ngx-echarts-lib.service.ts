import { Injectable } from '@angular/core';
import { Chart } from './chart-libs/chart';
import { InitChart } from './init-chart';
import { EchartStyleClass } from './chart-libs/chart-style.class';

@Injectable()
export class NgxEchartsLibService {

  public comonOption: Chart = new InitChart();
  public ChartLibStyle = new EchartStyleClass();

  constructor() { }

  /**
   * Json 操作
   * @param ontology 本体json
   * @param append 追加json
   */
  private jsonToSet(ontology: {[key: string]: any}, append: {[key: string]: any}) {
    for (const key in append) {
      if (ontology[key]) {
        if (
          typeof ontology[key] === 'object' &&
          Object.prototype.toString.call(ontology[key]).toLowerCase() === '[object object]' &&
          !Array.isArray(ontology[key])
        ) {
          this.jsonToSet(ontology[key], append[key]);
        } else {
          ontology[key] = append[key];
        }
      } else {
        ontology[key] = append[key];
      }
    }
  }

  /**
   * 设置初始chart配置
   * @param option 需要改变的Chart对象
   */
  public initOption(option: Chart) {
    if (option) {
      this.jsonToSet(this.comonOption, option);
    }
  }

  /**
   * 根据公共chart初始chart配置
   * @param option 需要改变的Chart对象的配置项
   * @return chart
   */
  public creatOption(option: Chart): Chart {
    const chart = JSON.parse(JSON.stringify(this.comonOption));
    if (option) {
      this.jsonToSet(chart, option);
    }

    this.ChartLibStyle.setStyleFormSeries(chart, option);
    return chart;
  }
}
