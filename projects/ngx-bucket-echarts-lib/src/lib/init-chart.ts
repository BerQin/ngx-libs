import { Chart } from './chart-libs/chart';

export class InitChart extends Chart {
  constructor() {
    super();
    this.tooltip = {
      trigger: 'item',
    };
    this.textStyle = {
      color: '#7f8b9c',
    };
    this.animation = false;
    this.color = ['#47A2FF', '#9860E5', '#59CB74', '#AAEB77', '#FBD44B', '#EAA675', '#5155D0', '#455289', '#D34E47', '#FC91A1'];
    this.legend = {
      type: 'scroll',
      top: '10px',
      data: [],
      width: '70%',
      itemWidth: 20,
      itemHeight: 12,
      textStyle: {
        color: 'rgba(0,0,0,.65)'
      }
    };
    this.grid = {
      left: '5%',
      right: '5%',
      bottom: '22px',
      top: '50px',
      containLabel: true,
    };
    this.xAxis = {
      splitLine: {
        show: true,
        lineStyle: {
          color: '#f8f9fa'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#d9d9d9'
        }
      },
      type: 'category',
      axisTick: {
        alignWithLabel: true
      }
    };

    this.yAxis = {
      splitLine: {
        show: true,
        lineStyle: {
          color: '#f8f9fa'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#d9d9d9'
        }
      },
      type: 'value'
    };
    this.series = [];
  }
}
