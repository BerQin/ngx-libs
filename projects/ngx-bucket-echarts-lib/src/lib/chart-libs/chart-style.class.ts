import { Chart, EchartSeriesConfig, EchartSeriesType } from './chart';

export class EchartStyleClass {

  public DeleteKey: {[key: string]: string[]} = {
    radar: [ 'xAxis' , 'yAxis' ],
    graph: ['xAxis' , 'yAxis' ],
    tree: ['xAxis' , 'yAxis' ],
    sankey: ['xAxis' , 'yAxis' ],
    pie: ['xAxis' , 'yAxis' ],
    sunburst: ['xAxis' , 'yAxis' ],
    funnel: ['xAxis' , 'yAxis' ],
    heatmap: ['xAxis' , 'yAxis' ],
    treemap: ['xAxis' , 'yAxis' ],
    gauge: ['xAxis' , 'yAxis' ]
  };

  setStyleFormSeries (option: Chart, config: Chart) {
    const series = option.series;

    if (series.length && series[0].type) {
      this.setStyleFromType(series[0].type, option, config);
    }
  }

  setStyleFromType(type: EchartSeriesType, option: Chart, config: Chart) {
    const keys = this.DeleteKey[type];
    if (keys && keys.length) {
      keys.map(res => {
        Reflect.deleteProperty(option, res);
      });
    }
  }
}
