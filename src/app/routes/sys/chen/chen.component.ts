import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { ChenService } from "./chen.service";

@Component({
  selector: 'app-chen',
  templateUrl: './chen.component.html',
  styles: []
})
export class ChenComponent implements OnInit {

  options = {
    tooltip: {
     trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
    }]
  };

  constructor(private chenService: ChenService) { }

  /**
   * 测试陈
   */
  testChen=function () {
    this.chenService.getChenInfo().subscribe(
      value => {
        if (null!=value.content){
          this.ChenList=value.content;
        }
      }
    )
  };

  ngOnInit() {
    this.testChen();
  }

}
