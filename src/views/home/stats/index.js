import React from 'react';
import { Card, Col, Row } from 'antd';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';

// 导入饼图
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';

export default class StatsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getOption = () => {
    const option = {
      title: {
        text: '',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        top: 20,
        right: 5,
        data: [
          '星期一',
          '星期二',
          '星期三',
          '星期四',
          '星期五',
          '星期六',
          '星期日'
        ]
      },
      series: [
        {
          name: '订单量',
          type: 'pie',
          radius: ['30%', '80%'],
          data: [
            {
              value: 1000,
              name: '星期一'
            },
            {
              value: 1500,
              name: '星期二'
            },
            {
              value: 2000,
              name: '星期三'
            },
            {
              value: 2500,
              name: '星期四'
            },
            {
              value: 3000,
              name: '星期五'
            },
            {
              value: 2300,
              name: '星期六'
            },
            {
              value: 1600,
              name: '星期日'
            }
          ]
        }
      ]
    };
    return option;
  };

  render() {
    return (
      <Row gutter={24}>
        <Col span={12}>
          <Card title='总订单' bordered={false}>
            <ReactEcharts option={this.getOption()} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title='用户订单' bordered={false}>
            <ReactEcharts option={this.getOption()} />
          </Card>
        </Col>
      </Row>
    );
  }
}
