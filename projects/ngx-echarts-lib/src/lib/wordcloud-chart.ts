import { InitChart } from './init-chart';
import * as WordCloud from 'echarts-wordcloud';
import { EchartSeriesDataXItemConfig, EchartXAxis, EchartYAxis } from './chart';

export interface WorldConfigInter {
  setData: Array<EchartSeriesDataXItemConfig>;
  color?: any;
  sizeRange?: number[];
  emphasis?: any;
  fontFamily?: string;
  fontWeight?: string;
}

export class WordCloudChart extends InitChart {

  constructor(worldConfig: WorldConfigInter = {
    setData: []
  }) {
    super();
    if ( WordCloud ) {
    }
    (this.xAxis as EchartXAxis).axisLine.show = false;
    (this.yAxis as EchartYAxis).axisLine.show = false;
    this.series = [
      {
        type: 'wordCloud',  // 判断类型
        shape: 'circle', // 绘制形状
        left: 'center', // 左侧
        top: 'center', // 上不
        width: '100%',
        height: '100%',
        sizeRange: worldConfig.sizeRange || [10, 140], // 字体大小的范围 10px - 60px
        drawOutOfBound: false,
        textStyle: {
            normal: {
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                // Color can be a callback function or a color string
                color: worldConfig.color || this.getFamart
            },
            emphasis: worldConfig.emphasis || {
                shadowBlur: 20,
                shadowColor: '#E5EBF1'
            }
        },
        data: worldConfig.setData
      }
    ];
  }

  getFamart() {
    return 'rgb(' + [
        Math.round(Math.random() * 160),
        Math.round(Math.random() * 160),
        Math.round(Math.random() * 160)
    ].join(',') + ')';
  }


}
