export interface EchartTextStyle {
  label?: any;
  show?: boolean;
  position?: 'top' |
  'left' |
  'right' |
  'bottom' |
  'inside' |
  'insideLeft' |
  'insideRight' |
  'insideTop' |
  'insideBottom' |
  'insideTopLeft' |
  'insideBottomLeft' |
  'insideTopRight' |
  'insideBottomRight';
  color?: string | Array<string> | any;
  curveness?: any;
  distance?: number;
  rotate?: number;
  offset?: Array<number>;
  type?: 'solid' | 'dashed' | 'dotted';
  opacity?: number;
  fontStyle?: 'normal' | 'italic' | 'oblique';
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
  fontFamily?: string;
  fontSize?: number;
  formatter?: string | any;
  align?: 'left' | 'center' | 'right';
  verticalAlign?: 'top' | 'middle' | 'bottom';
  lineHeight?: number;
  width?: number | string;
  rich?: {
    a?: EchartTextStyle;
    hr?: EchartTextStyle;
    b?: EchartTextStyle;
    per?: EchartTextStyle;
  };
  height?: number | string;
  textBorderColor?: string;
  textBorderWidth?: number;
  textShadowColor?: string;
  textShadowBlur?: string;
  textShadowOffsetX?: number;
  textShadowOffsetY?: number;
  backgroundColor?: string | {[key: string]: any};
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number | Array<number>;
  padding?: number | Array<number>;
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
}

export interface EchartXAxis {
  show?: boolean;
  gridIndex?: number;
  position?: 'top' | 'bottom' | 'left' | 'right';
  offset?: number;
  type?: 'value' | 'category' | 'time' | 'log';
  name?: string;
  nameLocation?: 'start' | 'middle' | 'center' | 'end';
  nameTextStyle?: EchartTextStyle;
  nameGap?: number;
  nameRotate?: number;
  inverse?: boolean;
  boundaryGap?: boolean | Array<string | number>;
  min?: any;
  max?: any;
  scale?: boolean;
  splitNumber?: number;
  minInterval?: number;
  maxInterval?: number;
  interval?: number;
  logBase?: number;
  silent?: boolean;
  triggerEvent?: boolean;
  axisLine?: EchartAxisLineConfig;
  axisTick?: EchartAxisTickConfig;
  axisLabel?: EchartAxisLabelConfig;
  splitLine?: EchartAxisSplitLineConfig;
  splitArea?: EchartAxisSplitAreaConfig;
  data?: Array<EchartAxisDataXItemConfig>;
  axisPointer?: EchartAxisPointerConfig;
  zlevel?: number;
  z?: number;
}

export interface EchartYAxis {
  show?: boolean;
  gridIndex?: number;
  position?: 'top' | 'bottom';
  offset?: number;
  type?: 'value' | 'category' | 'time' | 'log';
  name?: string;
  nameLocation?: 'start' | 'middle' | 'center' | 'end';
  nameTextStyle?: EchartTextStyle;
  nameGap?: number;
  nameRotate?: number;
  inverse?: boolean;
  boundaryGap?: boolean | Array<string | number>;
  min?: any;
  max?: any;
  scale?: boolean;
  splitNumber?: number;
  minInterval?: number;
  maxInterval?: number;
  interval?: number;
  logBase?: number;
  silent?: boolean;
  triggerEvent?: boolean;
  axisLine?: EchartAxisLineConfig;
  axisTick?: EchartAxisTickConfig;
  axisLabel?: EchartAxisLabelConfig;
  splitLine?: EchartAxisSplitLineConfig;
  splitArea?: EchartAxisSplitAreaConfig;
  data?: Array<EchartAxisDataXItemConfig | string | any>;
  axisPointer?: EchartAxisPointerConfig;
  zlevel?: number;
  z?: number;
}

export interface EchartTooltip {
  show?: boolean;
  trigger?: 'item' | 'axis' | 'none';
  axisPointer?: EchartAxisPointerConfig;
  showContent?: boolean;
  alwaysShowContent?: boolean;
  triggerOn?: 'mousemove' | 'click' | 'mousemove|click' | 'none';
  showDelay?: number;
  hideDelay?: number;
  enterable?: boolean;
  confine?: boolean;
  transitionDuration?: number;
  position?: string | Array<number | string> | any;
  formatter?: string | any;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  padding?: number;
  textStyle?: EchartTextStyle;
  extraCssText?: string;
}

export interface EchartItemIndicator {
  name?: string;
  max?: number;
  min?: number;
  color?: string;
}

export interface EchartLegendData {
  name?: string;
  icon?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | string;
  textStyle?: EchartTextStyle;
}

export interface EchartPageIcons {
  horizontal?: Array<string>;
  vertical?: Array<string>;
}

export interface EchartAxisLineConfig {
  show?: boolean;
  onZero?: boolean;
  onZeroAxisIndex?: number;
  lineStyle?: EchartTextStyle;
}

export interface EchartAxisTickConfig {
  show?: boolean;
  alignWithLabel?: boolean;
  interval?: number | any;
  inside?: boolean;
  length?: number;
  lineStyle?: EchartTextStyle;
}

export interface EchartAxisLabelConfig {
  show?: boolean;
  precision?: number | string;
  interval?: number | any;
  inside?: boolean;
  rotate?: number;
  margin?: number;
  formatter?: string | any;
  showMinLabel?: boolean;
  showMaxLabel?: boolean;
  color?: string | any;
  fontStyle?: string;
  fontWeight?: string;
  fontFamily?: string;
  fontSize?: number;
  align?: 'left' | 'center' | 'right';
  verticalAlign?: 'top' | 'middle' | 'bottom';
  lineHeight?: number;
  backgroundColor?: string | {[key: string]: any};
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number | Array<number>;
  padding?: number | Array<number>;
  shadowColor?: string;
  shadowBlur?: string;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  width?: number;
  height?: number;
  textBorderColor?: string;
  textBorderWidth?: number;
  textShadowColor?: string;
  textShadowBlur?: number;
  textShadowOffsetX?: number;
  textShadowOffsetY?: number;
  textStyle?: EchartTextStyle;
}

export interface EchartAxisSplitLineConfig {
  show?: boolean;
  interval?: number | any;
  lineStyle?: EchartTextStyle;
}

export interface EchartAxisSplitAreaConfig {
  show?: boolean;
  interval?: number | any;
  areaStyle?: EchartTextStyle;
}

export interface EchartAxisPointerConfig {
  show?: boolean;
  type?: 'line' | 'shadow' | 'cross';
  axis?: 'x' | 'y' | 'radius' | 'angle';
  snap?: boolean;
  z?: number;
  label?: EchartAxisLabelConfig;
  lineStyle?: EchartTextStyle;
  shadowStyle?: EchartTextStyle;
  length?: string | number;
  width?: number;
  crossStyle?: EchartTextStyle;
  triggerTooltip?: boolean;
  value?: number;
  status?: boolean;
  handle?: EchartAxisHandleConfig;
  link?: Array<object>;
  triggerOn?: 'mousemove' | 'click' | 'mousemove|click' | 'none';
}

export interface EchartAxisHandleConfig {
  show?: boolean;
  icon?: string;
  size?: number | Array<number>;
  margin?: number;
  color?: string;
  throttle?: number;
  shadowBlur?: number;
  shadowColor?: string;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
}

export interface EchartAxisDataXItemConfig {
  value?: string;
  textStyle?: EchartTextStyle;
}

export interface EchartDataZoomItemInsideConfig {
  type?: string;
  disabled?: boolean;
  xAxisIndex?: number | Array<number>;
  yAxisIndex?: number | Array<number>;
  radiusAxisIndex?: number | Array<number>;
  angleAxisIndex?: number | Array<number>;
  filterMode?: 'filter' | 'weakFilter' | 'empty' | 'none';
  start?: number;
  end?: number;
  startValue?: number | string | Array<any>;
  endValue?: number | string | Array<any>;
  minSpan?: number;
  maxSpan?: number;
  handleSize?: any;
  minValueSpan?: number | string | Array<any>;
  maxValueSpan?: number | string | Array<any>;
  orient?: 'horizontal' | 'vertical';
  zoomLock?: boolean;
  throttle?: number;
  rangeMode?: Array<number | string>;
  zoomOnMouseWheel?: true | false | 'shift' | 'ctrl' | 'alt';
  moveOnMouseMove?: true | false | 'shift' | 'ctrl' | 'alt';
  preventDefaultMouseMove?: boolean;
}

export interface EchartDataZoomItemSliderConfig {
  type?: string;
  show?: boolean;
  backgroundColor?: string;
  dataBackground?: {
    lineStyle?: EchartTextStyle,
    areaStyle?: EchartTextStyle,
  };
  fillerColor?: string;
  borderColor?: string;
  handleIcon?: string;
  handleSize?: number;
  handleStyle?: EchartTextStyle;
  labelPrecision?: number;
  labelFormatter?: string | any;
  showDetail?: boolean;
  showDataShadow?: string;
  realtime?: boolean;
  textStyle?: EchartTextStyle;
  xAxisIndex?: number | Array<number>;
  yAxisIndex?: number | Array<number>;
  radiusAxisIndex?: number | Array<number>;
  angleAxisIndex?: number | Array<number>;
  filterMode?: 'filter' | 'weakFilter' | 'empty' | 'none';
  start?: number;
  end?: number;
  startValue?: number | string | Array<any>;
  endValue?: number | string | Array<any>;
  minSpan?: number;
  maxSpan?: number;
  minValueSpan?: number | string | Array<any>;
  maxValueSpan?: number | string | Array<any>;
  orient?: 'horizontal' | 'vertical';
  zoomLock?: boolean;
  throttle?: number;
  rangeMode?: Array<number | string>;
  zlevel?: number;
  z?: number;
  left?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
}

export interface EchartDataVisualMapContinuousConfig {
  type?: string;
  min?: number;
  max?: number;
  range?: Array<number>;
  calculable?: boolean;
  realtime?: boolean;
  inverse?: boolean;
  precision?: number;
  itemWidth?: number;
  itemHeight?: number;
  align?: 'auto' | 'left' | 'right' | 'top' | 'bottom';
  text?: Array<string>;
  textGap?: Array<Array<number> | number>;
  show?: boolean;
  dimension?: Array<Array<number> | number>;
  seriesIndex?: number | Array<number>;
  hoverLink?: boolean;
  inRange?: any;
  outOfRange?: any;
  controller?: {
    inRange?: any;
    outOfRange?: any;
  };
  zlevel?: number;
  z?: number;
  left?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  orient?: 'horizontal' | 'vertical';
  padding?: number | Array<number>;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  color?: Array<string> | string;
  textStyle?: EchartTextStyle;
  formatter?: string | any;
}

export interface EchartDataVisualMapPiecewiseConfig {
  type?: string;
  splitNumber?: number;
  pieces?: Array<object>;
  categories?: Array<string>;
  min?: number;
  max?: number;
  minOpen?: boolean;
  maxOpen?: boolean;
  selectedMode?: 'multiple' | 'single';
  inverse?: boolean;
  precision?: number;
  itemWidth?: number;
  itemHeight?: number;
  align?: 'auto' | 'left' | 'right' | 'top' | 'bottom';
  text?: Array<string>;
  textGap?: Array<Array<number> | number>;
  showLabel?: boolean;
  itemGap?: number;
  itemSymbol?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow';
  show?: boolean;
  dimension?: Array<Array<number> | number>;
  seriesIndex?: number | Array<number>;
  hoverLink?: boolean;
  inRange?: any;
  outOfRange?: any;
  controller?: {
    inRange?: any;
    outOfRange?: any;
  };
  zlevel?: number;
  z?: number;
  left?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  orient?: 'horizontal' | 'vertical';
  padding?: number | Array<number>;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  color?: Array<string> | string;
  textStyle?: EchartTextStyle;
  formatter?: string | any;
}

export interface EchartToolboxConfig {
  show?: boolean;
  orient?: 'horizontal' | 'vertical';
  itemSize?: number;
  itemGap?: number;
  showTitle?: boolean;
  feature?: {
    saveAsImage?: {
      type?: 'png' | 'jpeg' | 'jpg',
      name?: string,
      backgroundColor?: string,
      excludeComponents?: Array<string>,
      show?: boolean,
      title?: boolean,
      icon?: string,
      iconStyle?: {
        normal?: EchartTextStyle,
        emphasis?: EchartTextStyle,
      },
      pixelRatio?: number,
    },
    restore?: {
      show?: boolean,
      title?: boolean,
      icon?: string,
      iconStyle?: {
        normal?: EchartTextStyle,
        emphasis?: EchartTextStyle,
      },
    },
    dataView?: {
      show?: boolean,
      title?: boolean,
      icon?: string,
      iconStyle?: {
        normal?: EchartTextStyle,
        emphasis?: EchartTextStyle,
      },
      readOnly?: boolean,
      optionToContent?: any,
      contentToOption?: any,
      lang?: Array<string>,
      backgroundColor?: string,
      textareaColor?: string,
      textareaBorderColor?: string,
      textColor?: string,
      buttonColor?: string,
      buttonTextColor?: string,
    },
    dataZoom?: {
      show?: boolean,
      title?: {
        zoom?: string,
        back?: string,
      },
      icon?: {
        zoom?: string,
        back?: string,
      },
      iconStyle?: {
        normal?: EchartTextStyle,
        emphasis?: EchartTextStyle,
      },
      xAxisIndex?: number | Array<number> | boolean,
      yAxisIndex?: number | Array<number> | boolean,
    },
    magicType?: {
      show?: boolean,
      type?: string | Array<string>,
      title?: {
        line?: string,
        bar?: string,
        stack?: string | boolean,
        tiled?: string,
      },
      icon?: {
        line?: string,
        bar?: string,
        stack?: string | boolean,
        tiled?: string,
      },
      iconStyle?: {
        normal?: EchartTextStyle,
        emphasis?: EchartTextStyle,
      },
      option?: {
        line?: object,
        bar?: object,
        stack?: object,
        tiled?: object,
      },
      seriesIndex?: {
        line?: Array<any>,
        bar?: Array<any>,
        stack?: Array<any>,
        tiled?: Array<any>,
      },
    },
    brush?: {
      type?: 'rect' | 'polygon' | 'lineX' | 'lineY' | 'keep' | 'clear',
      icon?: {
        rect?: string,
        polygon?: string,
        lineX?: string,
        lineY?: string,
        keep?: string,
        clear?: string,
      },
      title?: {
        rect?: string,
        polygon?: string,
        lineX?: string,
        lineY?: string,
        keep?: string,
        clear?: string,
      },
    },
  };
  iconStyle?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
  zlevel?: number;
  left?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  width?: string | number;
  height?: string | number;
}

export interface EchartRegionsConfig {
  name?: string;
  selected?: boolean;
  itemStyle?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
  label?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
}

export interface EchartTimeLineDataConfig {
  value?: string | number;
  tooltip?: EchartTooltip;
  symbol?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow';
  symbolSize?: number;
}


export interface EchartElementsConfig {
  type?: 'group' | 'image' | 'text' | 'rect' | 'circle' | 'ring' | 'sector' | 'arc' | 'polygon' | 'polyline' | 'line' | 'bezierCurve';
  id?: string;
  $action?: 'merge' | 'replace' | 'remove';
  left?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  bounding?: 'all' | 'raw';
  z?: number;
  shape?: {
    x?: number,
    x1?: number,
    x2?: number,
    y?: number,
    y1?: number,
    y2?: number,
    cpx1?: number,
    cpy1?: number,
    cpx2?: number,
    cpy2?: number,
    percent?: number,
    width?: number,
    height?: number,
    cx?: number,
    cy?: number,
    r: number,
    r0: number,
    startAngle?: number,
    endAngle?: number,
    clockwise?: boolean,
    points?: Array<number>,
    smooth?: number | string,
    smoothConstraint?: boolean,
  };
  style?: EchartElementStyle;
  zlevel?: number;
  silent?: boolean;
  invisible?: boolean;
  cursor?: string;
  draggable?: boolean;
  progressive?: boolean;
  width?: number;
  height?: number;
  children?: Array<EchartElementsConfig>;
  onclick?: any;
  onmouseover?: any;
  onmouseout?: any;
  onmousemove?: any;
  onmousewheel?: any;
  onmousedown?: any;
  onmouseup?: any;
  ondrag?: any;
  ondragstart?: any;
  ondragend?: any;
  ondragenter?: any;
  ondragleave?: any;
  ondragover?: any;
  ondrop?: any;
}

export interface EchartElementStyle {
  image?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  lineWidth?: number;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  shadowColor?: number;
}

export interface LegendType {
  type?: 'plain' | 'scroll';
  show?: boolean;
  zlevel?: number;
  z?: number;
  left?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  width?: string | number;
  height?: string | number;
  orient?: 'horizontal' | 'vertical';
  align?: 'auto' | 'left' | 'right';
  padding?: number;
  itemGap?: number;
  itemWidth?: number;
  itemHeight?: number;
  formatter?: any;
  selectedMode?: string | boolean;
  inactiveColor?: string;
  selected?: {[key: string]: any};
  textStyle?: EchartTextStyle;
  tooltip?: EchartTooltip;
  data?: Array<EchartLegendData>;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number | Array<number>;
  shadowBlur?: number;
  shadowColor?: string;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  scrollDataIndex?: number;
  pageButtonItemGap?: number;
  pageButtonGap?: number;
  pageButtonPosition?: 'start' | 'end';
  pageFormatter?: any;
  pageIcons?: EchartPageIcons;
  pageIconColor?: string;
  pageIconInactiveColor?: string;
  pageIconSize?: number | Array<number>;
  pageTextStyle?: EchartTextStyle;
  animation?: boolean;
  animationDurationUpdate?: number;
}

// export abstract class EChart extends Chart {
// }

export abstract class Chart {
  title?: EchartDetailConfig;
  legend?: LegendType | Array<LegendType>;
  grid?: {
    show?: boolean;
    zlevel?: number,
    z?: number,
    left?: string | number,
    top?: string | number,
    right?: string | number,
    bottom?: string | number,
    width?: string | number,
    height?: string | number,
    containLabel?: boolean,
    backgroundColor?: string,
    borderColor?: string,
    borderWidth?: number,
    shadowBlur?: number,
    shadowColor?: string,
    shadowOffsetX?: number,
    shadowOffsetY?: number,
    tooltip?: EchartTooltip,
  };
  xAxis?: EchartXAxis | Array<EchartXAxis>;
  yAxis?: EchartYAxis | Array<EchartYAxis>;
  polar?: {
    zlevel?: number,
    z?: number,
    center?: Array<string> | Array<number>,
    radius?: Array<string> | Array<number>,
    tooltip?: EchartTooltip,
  };
  radiusAxis?: {
    polarIndex?: number,
    type?: 'value' | 'category' | 'time' | 'log',
    name?: string,
    nameLocation?: 'start' | 'middle' | 'center' | 'end',
    nameTextStyle?: EchartTextStyle,
    nameGap?: number,
    nameRotate?: number,
    inverse?: boolean,
    boundaryGap?: boolean | Array<string> | Array<number>,
    min?: any,
    max?: any,
    scale?: boolean,
    splitNumber?: number,
    minInterval?: number,
    maxInterval?: number,
    interval?: number,
    logBase?: number,
    silent?: boolean,
    triggerEvent?: boolean,
    axisLine?: EchartAxisLineConfig,
    axisTick?: EchartAxisTickConfig,
    axisLabel?: EchartAxisLabelConfig,
    splitLine?: EchartAxisSplitLineConfig,
    splitArea?: EchartAxisSplitAreaConfig,
    data?: Array<EchartAxisDataXItemConfig>,
    axisPointer?: EchartAxisPointerConfig,
    zlevel?: number,
    z?: number,
  };
  angleAxis?: {
    polarIndex?: number,
    startAngle?: number,
    clockwise?: boolean,
    type?: 'value' | 'category' | 'time' | 'log',
    boundaryGap?: boolean | Array<string> | Array<number>,
    min?: any,
    max?: any,
    scale?: boolean,
    splitNumber?: number,
    minInterval?: number,
    maxInterval?: number,
    interval?: number,
    logBase?: number,
    silent?: boolean,
    triggerEvent?: boolean,
    axisLine?: EchartAxisLineConfig,
    axisTick?: EchartAxisTickConfig,
    axisLabel?: EchartAxisLabelConfig,
    splitLine?: EchartAxisSplitLineConfig,
    splitArea?: EchartAxisSplitAreaConfig,
    data?: Array<EchartAxisDataXItemConfig>,
    axisPointer?: EchartAxisPointerConfig,
    zlevel?: number,
    z?: number,
  };
  radar?: {
    zlevel?: number,
    z?: number,
    center?: Array<number> | Array<string>,
    radius?: number | string,
    startAngle?: number,
    name?: EchartTextStyle,
    nameGap?: number,
    splitNumber?: number,
    shape?: string,
    scale?: boolean,
    silent?: boolean,
    triggerEvent?: boolean,
    axisLine?: EchartAxisLineConfig,
    axisTick?: EchartAxisTickConfig,
    axisLabel?: EchartAxisLabelConfig,
    splitLine?: EchartAxisSplitLineConfig,
    splitArea?: EchartAxisSplitAreaConfig,
    indicator?: Array<EchartItemIndicator>,
  };
  dataZoom?: Array<EchartDataZoomItemInsideConfig | EchartDataZoomItemSliderConfig>;
  visualMap?: Array<EchartDataVisualMapContinuousConfig |
              EchartDataVisualMapPiecewiseConfig> |
              EchartDataVisualMapPiecewiseConfig |
              EchartDataVisualMapContinuousConfig;
  tooltip?: EchartTooltip;
  axisPointer?: EchartAxisPointerConfig;
  toolbox?: EchartToolboxConfig;
  brush?: {
    type?: 'rect' | 'polygon' | 'lineX' | 'lineY' | 'keep' | 'clear',
    brushLink?: Array<number | string> | string,
    seriesIndex?: number | Array<number | string> | string | 'all' | ' Array' | 'number',
    geoIndex?: Array<number | string> | number | string,
    xAxisIndex?: Array<number | string> | number | string,
    yAxisIndex?: Array<number | string> | number | string,
    brushType?: 'rect' | 'polygon' | 'lineX' | 'lineY',
    brushMode?: 'single' | 'multiple',
    transformable?: boolean,
    brushStyle?: EchartTextStyle,
    throttleType?: 'debounce' | 'fixRate',
    throttleDelay?: number,
    removeOnClick?: number,
    inBrush?: any,
    outOfBrush?: any,
    z?: number,
  };
  geo?: {
    show?: boolean,
    map?: string,
    roam?: boolean,
    center?: Array<number>,
    aspectScale?: number,
    boundingCoords?: Array<number>,
    zoom?: number,
    scaleLimit?: {
      min?: number,
      max?: number,
    },
    nameMap?: object,
    selectedMode?: boolean | string,
    label?: {
      normal?: EchartTextStyle,
      emphasis?: EchartTextStyle,
    },
    itemStyle?: {
      normal?: EchartTextStyle,
      emphasis?: EchartTextStyle,
    },
    zlevel?: number;
    z?: number;
    left?: string | number;
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    layoutCenter?: Array<string | number>;
    layoutSize?: number | string;
    regions?: Array<EchartRegionsConfig>;
    silent?: boolean;
  };
  parallel?: {
    zlevel?: number,
    z?: number,
    left?: string | number,
    top?: string | number,
    right?: string | number,
    bottom?: string | number,
    width?: string | number,
    height?: string | number,
    layout?: 'horizontal' | 'vertical',
    axisExpandable?: boolean,
    axisExpandCenter?: number,
    axisExpandCount?: number,
    axisExpandWidth?: number,
    axisExpandTriggerOn?: 'click' | 'mousemove';
    parallelAxisDefault?: {
      type?: 'value' | 'category' | 'time' | 'log',
      name?: string,
      nameLocation?: 'start' | 'middle' | 'center' | 'end',
      nameTextStyle?: EchartTextStyle,
      nameGap?: number,
      nameRotate?: number,
      inverse?: boolean,
      boundaryGap?: boolean | Array<string | number>,
      min?: any,
      max?: any,
      scale?: boolean,
      splitNumber?: number,
      minInterval?: number,
      maxInterval?: number,
      interval?: number,
      logBase?: number,
      silent?: boolean,
      triggerEvent?: boolean,
      axisLine?: EchartAxisLineConfig,
      axisTick?: EchartAxisTickConfig,
      axisLabel?: EchartAxisLabelConfig,
      data?: Array<EchartAxisDataXItemConfig>,
    }
  };
  parallelAxis?: {
    dim?: number,
    parallelIndex?: number,
    realtime?: boolean,
    areaSelectStyle?: EchartTextStyle,
    type?: 'value' | 'category' | 'time' | 'loming',
    name?: string,
    nameLocation?: 'start' | 'middle' | 'center' | 'end',
    nameTextStyle?: EchartTextStyle,
    nameGap?: number,
    nameRotate?: number,
    inverse?: boolean,
    boundaryGap?: boolean | Array<string | number>,
    min?: any,
    max?: any,
    scale?: boolean,
    splitNumber?: number,
    minInterval?: number,
    maxInterval?: number,
    interval?: number,
    logBase?: number,
    silent?: boolean,
    triggerEvent?: boolean,
    axisLine?: EchartAxisLineConfig,
    axisTick?: EchartAxisTickConfig,
    axisLabel?: EchartAxisLabelConfig,
    data?: Array<EchartAxisDataXItemConfig>,
  };
  singleAxis?: {
    zlevel?: number,
    z?: number,
    left?: string | number,
    top?: string | number,
    right?: string | number,
    bottom?: string | number,
    width?: string | number,
    height?: string | number,
    orient?: 'vertical' | 'horizontal',
    type?: 'value' | 'category' | 'time' | 'loming',
    name?: string,
    nameLocation?: 'start' | 'middle' | 'center' | 'end',
    nameTextStyle?: EchartTextStyle,
    nameGap?: number,
    nameRotate?: number,
    inverse?: boolean,
    boundaryGap?: boolean | Array<string | number>,
    min?: any,
    max?: any,
    scale?: boolean,
    splitNumber?: number,
    minInterval?: number,
    maxInterval?: number,
    interval?: number,
    logBase?: number,
    silent?: boolean,
    triggerEvent?: boolean,
    axisLine?: EchartAxisLineConfig,
    axisTick?: EchartAxisTickConfig,
    axisLabel?: EchartAxisLabelConfig,
    splitLine?: EchartAxisSplitLineConfig,
    splitArea?: EchartAxisSplitAreaConfig,
    data?: Array<EchartAxisDataXItemConfig>,
    axisPointer?: EchartAxisPointerConfig,
    tooltip?: EchartTooltip,
  };
  timeline?: {
    show?: boolean,
    type?: 'slider',
    axisType?: 'value' | 'category' | 'time',
    currentIndex?: number,
    autoPlay?: boolean,
    rewind?: boolean,
    loop?: boolean,
    playInterval?: number,
    realtime?: boolean,
    controlPosition?: 'left' | 'right',
    zlevel?: number,
    z?: number,
    left?: string | number,
    top?: string | number,
    right?: string | number,
    bottom?: string | number,
    padding?: number | Array<number>,
    orient?: 'vertical' | 'horizontal',
    inverse?: boolean,
    symbol?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow',
    symbolSize?: number | Array<number>,
    symbolRotate?: number,
    symbolOffset?: Array<number | string>,
    data?: Array<EchartAxisDataXItemConfig | string | number>,
    lineStyle?: EchartTextStyle,
    label?: {
      normal?: EchartTextStyle,
      emphasis?: EchartTextStyle,
    },
    itemStyle?: {
      normal?: EchartTextStyle,
      emphasis?: EchartTextStyle,
    },
    checkpointStyle?: {
      symbol?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow',
      symbolSize?: number | Array<number>,
      symbolRotate?: number,
      symbolOffset?: Array<number | string>,
      color?: string,
      borderWidth?: number,
      borderColor?: string,
      animation?: boolean,
      animationDuration?: number,
      animationEasing?: string,
    },
    controlStyle?: {
      show?: boolean,
      showPlayBtn?: boolean,
      showPrevBtn?: boolean,
      showNextBtn?: boolean,
      itemSize?: number,
      itemGap?: number,
      position?: string,
      playIcon?: string,
      stopIcon?: string,
      prevIcon?: string,
      nextIcon?: string,
      normal?: EchartTextStyle,
      emphasis?: EchartTextStyle,
    },
  };
  graphic?: {
    elements?: Array<EchartElementsConfig>,
  };
  calendar?: {
    zlevel?: number;
    z?: number;
    left?: string | number;
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    width?: string | number;
    height?: string | number;
    range?: number | string | Array<number | string>;
    cellSize?: number | Array<number | string>;
    orient?: 'horizontal' | 'vertical';
    splitLine?: EchartAxisSplitLineConfig;
    itemStyle?: {
      normal?: EchartTextStyle,
    };
    dayLabel?: EchartTextStyle,
    monthLabel?: EchartTextStyle,
    yearLabel?: EchartTextStyle,
    silent?: boolean,
  };
  series?: Array<EchartSeriesConfig>;
  color?: Array<string>;
  backgroundColor?: string;
  textStyle?: EchartTextStyle;
  animation?: boolean;
  animationThreshold?: number;
  animationDuration?: number;
  animationEasing?: string;
  animationDelay?: number | any;
  animationDurationUpdate?: number | any;
  animationEasingUpdate?: string;
  animationDelayUpdate?: number | any;
  progressive?: number;
  progressiveThreshold?: number;
  blendMode?: string;
  hoverLayerThreshold?: number;
  useUTC?: boolean;
}

export interface EchartDetailConfig {
  show?: boolean;
  offsetCenter?: Array<number | string>;
  color?: string;
  fontStyle?: 'normal' | 'italic' | 'oblique';
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
  fontFamily?: string;
  fontSize?: number;
  lineHeight?: number;
  backgroundColor?: string | object;
  target?: 'self' | 'blank';
  textStyle?: EchartTextStyle;
  subtext?: string;
  sublink?: string;
  subtarget?: string;
  subtextStyle?: EchartTextStyle;
  padding?: number | Array<number>;
  itemGap?: number;
  zlevel?: number;
  z?: number;
  width?: number | string;
  height?: number | string;
  left?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  shadowBlur?: number;
  shadowColor?: string;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  textBorderColor?: string;
  textBorderWidth?: number;
  textShadowColor?: string;
  textShadowBlur?: number;
  textShadowOffsetX?: number;
  textShadowOffsetY?: number;
}

export interface EchartSeriesConfig {
  type?: 'line' |
  'bar' |
  'pie' |
  'scatter' |
  'effectScatter' |
  'radar' |
  'treemap' |
  'boxplot' |
  'candlestick' |
  'heatmap' |
  'map' |
  'parallel' |
  'lines' |
  'graph' |
  'sankey' |
  'funnel' |
  'gauge' |
  'pictorialBar' |
  'themeRiver' |
  'custom' |
  'wordCloud' |
  'tree';
  shape?: 'circle'; // 兼容echarts-wordcloud
  sizeRange?: Array<number>; // 兼容echarts-wordcloud 字体大小的范围
  drawOutOfBound?: boolean; // 兼容echarts-wordcloud 是否允许
  rotationRange?: number[]; // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45
  rotationStep?: number;
  gridSize?: number;
  mapType?: string;
  name?: string;
  textRotation?: number[];
  textPadding?: number | string;
  autoSize?: {
    enable?: boolean,
    minSize?: number,
  };
  pointer?: EchartAxisPointerConfig;
  title?: EchartDetailConfig;
  boundaryGap?: boolean | Array<string> | Array<number>;
  detail?: EchartDetailConfig;
  coordinateSystem?: 'cartesian2d' | 'parallel' | 'polar' | 'single' | 'geo';
  singleAxisIndex?: number;
  layoutCenter?: Array<number | string> | number | string;
  splitNumber?: number;
  inactiveOpacity?: number;
  axisLine?: EchartAxisLineConfig;
  axisTick?: EchartAxisTickConfig;
  axisLabel?: EchartAxisLabelConfig;
  splitLine?: EchartAxisSplitLineConfig;
  splitArea?: EchartAxisSplitAreaConfig;
  activeOpacity?: number;
  polyline?: boolean;
  realtime?: boolean;
  parallelIndex?: number;
  layoutSize?: number | string;
  xAxisIndex?: number;
  yAxisIndex?: number;
  initialTreeDepth?: number;
  renderItem?: {
    arguments?: {
      params?: {[key: string]: any},
      api?: {
        value?: any,
        coord?: any,
        size?: any,
        style?: any,
        styleEmphasis?: any,
        visual?: any,
        barLayout?: any,
        currentSeriesIndices?: any,
        font?: any,
        getWidth?: any,
        getHeight?: any,
        getZr?: any,
        getDevicePixelRatio?: any,
      }
    },
    return?: {[key: string]: any},
  };
  leaves?: ChartLeaves;
  orient?: string;
  radarIndex?: number;
  geoIndex?: number;
  nodeWidth?: number;
  nodeGap?: number;
  layoutIterations?: number;
  calendarIndex?: number;
  funnelAlign?: 'left' | 'right' | 'center';
  polarIndex?: number;
  blurSize?: number;
  map?: string;
  symbol?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | 'emptyCircle' | 'none';
  symbolSize?: number | Array<number> | any;
  symbolPosition?: 'start' | 'end' | 'center';
  symbolRotate?: number;
  symbolOffset?: Array<number | string>;
  symbolRepeat?: null | undefined | boolean | number | string;
  showSymbol?: boolean;
  showAllSymbol?: boolean;
  symbolRepeatDirection?: 'start' | 'end';
  symbolMargin?: number | string;
  symbolClip?: boolean;
  symbolBoundingData?: number | Array<object | string | number>;
  symbolPatternSize?: number;
  hoverAnimation?: boolean | EchartAnimation;
  legendHoverLink?: boolean;
  large?: boolean;
  minOpacity?: number;
  mapValueCalculation?: 'sum' | 'average' | 'max' | 'min';
  showLegendSymbol?: boolean;
  maxOpacity?: number;
  largeThreshold?: number;
  startAngle?: number;
  clockwise?: boolean;
  selectedOffset?: number;
  selectedMode?: boolean | string;
  hoverOffset?: number;
  minAngle?: number;
  roseType?: 'radius' | 'area' | boolean;
  effectType?: 'ripple';
  avoidLabelOverlap?: boolean;
  stillShowZeroSum?: boolean;
  showEffectOn?: 'render' | 'emphasis';
  squareRatio?: number;
  leafDepth?: number;
  aspectScale?: number;
  drillDownIcon?: string;
  min?: number;
  max?: number;
  minSize?: string;
  maxSize?: string;
  sort?: 'ascending' | 'descending' | 'none';
  gap?: number;
  zoom?: number;
  scaleLimit?: {
    min?: number,
    max?: number
  };
  circular?: {
    rotateLabel?: boolean,
  };
  force?: {
    initLayout?: string,
    repulsion?: Array<number> | number,
    gravity?: number,
    edgeLength?: Array<number> | number,
    layoutAnimation?: boolean
  };
  nodeScaleRatio?: number;
  edgeSymbol?: Array<string> | string;
  edgeSymbolSize?: number | Array<number>;
  draggable?: boolean;
  focusNodeAdjacency?: boolean;
  effect?: {
    show?: boolean,
    period?: number,
    delay?: number | any,
    constantSpeed?: number,
    symbol?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow',
    symbolSize?: number | Array<number> | any,
    color?: string | Array<string>;
    trailLength?: number;
    loop?: boolean;
  };
  nameMap?: object;
  roam?: false | 'scale' | 'zoom' | 'move' | 'pan' | true;
  nodeClick?: false | 'zoomToNode' | 'link';
  zoomToNodeRatio?: number;
  rippleEffect?: {
    period?: number,
    scale?: number,
    brushType?: 'stroke' | 'fill',
  };
  stack?: string | boolean;
  cursor?: string;
  center?: Array<number | string>;
  radius?: Array<number | string> | string;
  barWidth?: number | string;
  barMaxWidth?: number | string;
  barMinHeight?: number | string;
  barGap?: string;
  barCategoryGap?: string;
  connectNulls?: boolean;
  clipOverflow?: boolean;
  step?: string | boolean;
  levels?: Array<EchartLevelsitem>;
  edgeLabel?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
  label?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
  upperLabel?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
  itemStyle?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
  lineStyle?: {
    type?: string;
    color?: string;
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
  areaStyle?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
  breadcrumb?: {
    show?: boolean;
    left?: 'left' | 'center' | 'right' | number | string;
    top?: 'top' | 'middle' | 'bottom' | number | string;
    right?: number | string;
    bottom?: number | string;
    height?: number;
    emptyItemWidth?: number;
    itemStyle?: {
      normal?: EchartTextStyle,
      emphasis?: EchartTextStyle,
    };
  };
  layout?: 'horizontal' | 'vertical' | 'orthogonal' | 'radial' | 'circular';
  boxWidth?: Array<number>;
  smooth?: boolean;
  smoothMonotone?: string;
  sampling?: 'average' | 'max' | 'min' | 'sum';
  dimensions?: Array<string | object | null | number>;
  encode?: object;
  data?: Array<EchartSeriesDataXItemConfig>;
  nodes?: Array<EchartSeriesDataXItemConfig>;
  links?: Array<EchartlinksConfig>;
  edges?: Array<EchartlinksConfig>;
  markPoint?: {
    symbol?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow',
    symbolSize?: number | Array<number>,
    symbolRotate?: number,
    symbolOffset?: Array<number | string>,
    silent?: boolean,
    label?: {
      normal?: EchartTextStyle,
      emphasis?: EchartTextStyle,
    },
    itemStyle?: {
      normal?: EchartTextStyle,
      emphasis?: EchartTextStyle,
    },
    data?: Array<EchartMarkPointDataXItemConfig>,
    animation?: boolean,
    animationThreshold?: number,
    animationDuration?: number,
    animationEasing?: string,
    animationDelay?: number | any,
    animationDurationUpdate?: number | any,
    animationEasingUpdate?: string | {
      animationDelay?: number | any,
      animationDelayUpdate?: number | any,
    },
    animationDelayUpdate?: number | any,
  };
  markLine?: {
    silent?: boolean,
    symbol?: string | Array<string>,
    symbolSize?: number | Array<number>,
    precision?: number,
    label?: {
      normal?: EchartTextStyle,
      emphasis?: EchartTextStyle,
    },
    lineStyle?: {
      normal?: EchartTextStyle,
      emphasis?: EchartTextStyle,
      color?: string,
    },
    data?: Array<EchartMarkPointDataXItemConfig> | any,
    animation?: boolean,
    animationThreshold?: number,
    animationDuration?: number,
    animationEasing?: string,
    animationDelay?: number | any,
    animationDurationUpdate?: number | any,
    animationEasingUpdate?: string,
    animationDelayUpdate?: number | any,
  };
  markArea?: {
    silent?: boolean,
    label?: {
      normal?: EchartTextStyle,
      emphasis?: EchartTextStyle,
    },
    itemStyle?: {
      normal?: EchartTextStyle,
      emphasis?: EchartTextStyle,
    },
    data?: Array<EchartMarkPointDataXItemConfig>,
    animation?: boolean,
    animationThreshold?: number,
    animationDuration?: number,
    animationEasing?: string,
    animationDelay?: number | any,
    animationDurationUpdate?: number | any,
    animationEasingUpdate?: string,
    animationDelayUpdate?: number | any,
  };
  categories?: Array<string>;
  visualDimension?: number;
  visualMin?: number;
  visualMax?: number;
  color?: Array<string>;
  colorAlpha?: Array<number>;
  colorSaturation?: number;
  colorMappingBy?: string;
  visibleMin?: number;
  childrenVisibleMin?: number;
  zlevel?: number;
  z?: number;
  left?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  width?: string | number;
  height?: string | number;
  silent?: boolean | EchartSilentConfig;
  animation?: boolean;
  expandAndCollapse?: boolean;
  animationThreshold?: number;
  animationDuration?: number;
  animationEasing?: string;
  animationDelay?: number | any;
  animationDurationUpdate?: number | any;
  animationEasingUpdate?: string;
  animationDelayUpdate?: number | any;
  tooltip?: EchartTooltip;
  textStyle?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
}

export interface ChartLeaves {
  label?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
}

export interface EchartlinksConfig {
  source?: string | number;
  target?: string | number;
  value?: number;
  lineStyle: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
  label: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
  symbol?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow';
  symbolSize?: number | Array<number>;
}

export interface EchartAnimation {
  animation?: boolean;
  animationThreshold?: number;
  animationDuration?: number;
  animationEasing?: string;
  animationDelay?: number | any;
  animationDurationUpdate?: number | any;
  animationEasingUpdate?: string;
  animationDelayUpdate?: number | any;
}

export interface EchartSilentConfig {
  link?: string;
  target?: string;
  children?: Array<EchartSeriesDataXItemConfig>;
  tooltip?: EchartTooltip;
}
export interface EchartCategoriesConfig {
  name?: string;
  symbol?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow';
  symbolSize?: number | Array<number>;
  symbolRotate?: number;
  symbolOffset?: Array<number | string>;
  label?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
  itemStyle?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
}
export interface EchartLevelsitem {
  visualDimension?: number;
  visualMin?: number;
  visualMax?: number;
  color?: Array<string>;
  colorAlpha?: Array<number>;
  colorSaturation?: number;
  colorMappingBy?: string;
  visibleMin?: number;
  childrenVisibleMin?: number;
  label?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
  upperLabel?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
  itemStyle?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
}

export interface EchartMarkPointDataXItemConfig {
  name?: string;
  type?: 'min' | 'max' | 'average';
  valueIndex?: number;
  valueDim?: string;
  coord?: Array<number | string>;
  x?: number | string;
  y?: number | string;
  value?: number;
  symbol?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow';
  symbolSize?: number | Array<number>;
  symbolRotate?: number;
  symbolOffset?: Array<number | string>;
  itemStyle?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
  lineStyle?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
  label?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
}
export interface EchartSeriesDataXItemConfig {
  name?: string;
  value?: number | number[];
  id?: string;
  visualDimension?: number;
  visualMin?: number;
  visualMax?: number;
  color?: Array<string> | string;
  colorAlpha?: Array<number>;
  colorSaturation?: number;
  colorMappingBy?: 'value' | 'index' | 'id';
  visibleMin?: number;
  childrenVisibleMin?: number;
  selected?: boolean;
  symbol?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow';
  symbolSize?: number | Array<number>;
  symbolRotate?: number;
  symbolOffset?: Array<number | string>;
  label?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
  labelLine?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
  lineStyle?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
  itemStyle?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
  areaStyle?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
  tooltip?: EchartTooltip;
  /* 为了兼容word */
  textStyle?: {
    normal?: EchartTextStyle,
    emphasis?: EchartTextStyle,
  };
}
