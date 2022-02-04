import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import './table.sass'
import { MenuOutlined } from '@ant-design/icons'
import Title from 'antd/lib/typography/Title';

const Table = () => {

  const [bgPanel, setBgPanel] = useState('#18bfff')

  return (
    <Row>
      <Col span={24} >
        <div className='top-panel' style={{ backgroundColor: bgPanel }}>
          <div className='top-box'>
            <Title level={4} style={{ color: '#fff', textAlign: 'center' }}>
              Название таблицы
            </Title>
          </div>

          <div className='bottom-box'>
            <div className='menu-section'>
              <MenuOutlined style={{ fontSize: "20px", color: '#ffffff', cursor: 'pointer' }} />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Table;
