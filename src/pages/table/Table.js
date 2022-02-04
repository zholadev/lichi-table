import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import './table.sass'

const Table = () => {

  const [bgPanel, setBgPanel] = useState('#18bfff')

  return (
    <Row>
      <Col span={24} >
        <div className='top-panel' style={{ backgroundColor: bgPanel }}>

        </div>
      </Col>
    </Row>
  );
}

export default Table;
