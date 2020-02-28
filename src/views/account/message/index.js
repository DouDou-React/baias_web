import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';

const columns = [
  {
    title: '编号',
    width: 100,
    dataIndex: 'code',
    key: 'code',
    fixed: 'left'
  },
  {
    title: '角色名称',
    dataIndex: 'name',
    key: 'name',
    width: 150
  },
  {
    title: '备注',
    dataIndex: 'remark',
    key: 'remark',
    width: 150
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime'
  },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>查看</a>
  }
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    code: i,
    name: `角色 ${i}`,
    remark: `测试角色 ${i}`,
    createTime: new Date().getTime()
  });
}

export default class RoleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: 1500,
          y: 410
        }}
      />
    );
  }
}
