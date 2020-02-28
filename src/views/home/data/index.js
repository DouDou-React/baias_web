import React from 'react';
import {
  Card,
  Col,
  Row,
  Icon,
  Statistic,
  Timeline,
  Comment,
  Tooltip,
  List
} from 'antd';

import moment from 'moment';

const data = [
  {
    author: '匿名用户二',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: <p>很好吃.</p>,
    datetime: (
      <Tooltip
        title={moment()
          .subtract(1, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(1, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    )
  },
  {
    author: '匿名用户一',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: <p>很好用.</p>,
    datetime: (
      <Tooltip
        title={moment()
          .subtract(2, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(2, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    )
  }
];

export default class DataView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Row gutter={24}>
          <Col span={4}>
            <Card
              cover={
                <img
                  alt='example'
                  src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                />
              }
              bordered='bordered'
            >
              <Statistic
                title='点赞'
                value={1128}
                prefix={<Icon type='like' />}
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              cover={
                <img
                  alt='example'
                  src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                />
              }
              bordered='bordered'
            >
              <Statistic
                title='粉丝'
                value={1128}
                prefix={<Icon type='bulb' />}
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              cover={
                <img
                  alt='example'
                  src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                />
              }
              bordered='bordered'
            >
              <Statistic
                title='订单'
                value={1128}
                prefix={<Icon type='appstore' />}
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              cover={
                <img
                  alt='example'
                  src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                />
              }
              bordered='bordered'
            >
              <Statistic
                title='评论'
                value={1128}
                prefix={<Icon type='alert' />}
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              cover={
                <img
                  alt='example'
                  src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                />
              }
              bordered='bordered'
            >
              <Statistic
                title='收入'
                value={1128}
                prefix={<Icon type='bank' />}
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              cover={
                <img
                  alt='example'
                  src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                />
              }
              bordered='bordered'
            >
              <Statistic
                title='支出'
                value={1128}
                prefix={<Icon type='account-book' />}
              />
            </Card>
          </Col>
        </Row>
        <Row
          gutter={24}
          style={{
            margin: '16px 0 0 0'
          }}
        >
          <Col span={14}>
            <Card title='最新评论' bordered='bordered'>
              <List
                className='comment-list'
                header={`${data.length} replies`}
                itemLayout='horizontal'
                dataSource={data}
                renderItem={item => (
                  <li>
                    <Comment
                      actions={item.actions}
                      author={item.author}
                      avatar={item.avatar}
                      content={item.content}
                      datetime={item.datetime}
                    />
                  </li>
                )}
              />
            </Card>
          </Col>
          <Col span={10}>
            <Card title='最新任务' bordered='bordered'>
              <Timeline mode='right'>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>
                  Solve initial network problems 2015-09-01
                </Timeline.Item>
                <Timeline.Item
                  dot={
                    <Icon type='clock-circle-o' style={{ fontSize: '16px' }} />
                  }
                  color='red'
                >
                  Technical testing 2015-09-01
                </Timeline.Item>
                <Timeline.Item>
                  Network problems being solved 2015-09-01
                </Timeline.Item>
              </Timeline>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
