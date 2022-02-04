import React from 'react';
import Title from 'antd/lib/typography/Title';
import './select-card.sass'
import { Popover } from 'antd';
import { TableOutlined } from '@ant-design/icons'


const SelectCard = (props) => {

  const { data } = props

  return (
    <Popover content={data.title}>
      <div className='card-box'>
        <div className='select-card'>
          <TableOutlined style={{ fontSize: '48px', color: '#666' }} />
        </div>
        <Title level={5} style={{ textAlign: 'center' }}>{data.title}</Title>
      </div>
    </Popover>
  );
}

export default SelectCard;
