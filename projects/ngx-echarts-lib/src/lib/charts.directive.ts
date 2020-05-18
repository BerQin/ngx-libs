import { Directive, ElementRef, Input, OnInit, OnDestroy, Output, EventEmitter, OnChanges, Optional, AfterViewInit } from '@angular/core';

import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';

import * as echarts from 'echarts';

import ECharts = echarts.ECharts;
import EChartOption = echarts.EChartOption;

import { NgxEchartsLibService } from './ngx-echarts-lib.service';
import { Chart } from './chart';

@Directive({
  selector: '[ngxeCharts]'
})
export class ChartsDirective implements OnInit, OnDestroy, OnChanges, AfterViewInit {

  private chart: ECharts;

  private sizeCheckInterval: any = null;
  private reSize$ = new Subject<string>();
  private componetDestroyed: Subject<any> = new Subject<any>();
  private chartDom: any = document.createElement('div');
  private elWidth: number;
  private elHeight: number;

  private _Options: Chart;
  @Input() set options(value: Chart) {
    this._Options = this.chartService.creatOption(value);
  }

  get options(): Chart {
    return this._Options;
  }

  @Input() widthDifference = 0;

  @Output() afterChartView: EventEmitter<any> = new EventEmitter<any>();
  @Output() chartClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() chartMouseover: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public chartService: NgxEchartsLibService,
    public el: ElementRef
  ) {
    if (this.el) {
      if (this.el.nativeElement !== null) {
        this.el.nativeElement.appendChild(this.chartDom);
        this.chart = echarts.init(this.chartDom, 'vintage');
      }
    }
  }

  ngOnChanges() {
    this.change();
  }

  ngAfterViewInit() {
    if (this.chart) {
      this.afterChartView.emit(this.chart);
      this.addEvents();
    }
  }

  ngOnInit() {
    this.sizeCheckInterval = setInterval(() => {
      this.reSize$.next(`
      ${document.body.offsetHeight}:
      ${document.body.offsetWidth}:
      ${this.el.nativeElement.offsetHeight}:
      ${this.el.nativeElement.offsetWidth}
    `);
    }, 100);
    this.reSize$.pipe(
      takeUntil(this.componetDestroyed),
      distinctUntilChanged()
    ).subscribe((_) => {
      this.resize();
    });
  }

  resize() {
    this.elHeight = this.el.nativeElement.offsetHeight;
    this.elWidth = this.el.nativeElement.offsetWidth - this.widthDifference;
    this.chartDom.style.height = `${this.elHeight}px`;
    this.chartDom.style.width = `${this.elWidth}px`;
    this.chart.resize();
  }

  ngOnDestroy() {
    if (this.sizeCheckInterval) {
      clearInterval(this.sizeCheckInterval);
    }
    this.componetDestroyed.next();
    this.componetDestroyed.unsubscribe();
  }

  public change(): void {
    this.chart.clear();
    if (this.options) {
      this.chart.setOption(this.options);
    }
  }

  addEvents() {
    this.chart.on('click', (e) => {
      if (!e.data) {
        return false;
      }
      this.chartClick.emit(e);
    });

    this.chart.on('mouseover', (e) => {
      if (!e.data) {
        return false;
      }
      this.chartMouseover.emit(e);
    });
  }
}
