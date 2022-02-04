import React from 'react';
import './tables.sass'
import { Typography, Divider, Row, Col, Popover } from 'antd';
import { FileAddOutlined } from '@ant-design/icons'
import SelectCard from '../../components/selectCard/SelectCard';

const { Title } = Typography;

const data = [
  {
    id: 1,
    title: 'name table of lichi'
  },
  {
    id: 2,
    title: 'name table of lichi'
  },
  {
    id: 3,
    title: 'name table of lichi'
  },
  {
    id: 4,
    title: 'name table of lichi'
  }
]

const Tables = () => {
  return (
    <div className='table-dashboard'>
      <Title level={2}>Таблицы</Title>
      <Divider />
      <Title type="secondary" level={4}>Создать таблицу</Title>
      <Row>
        <Col span={24} style={{ marginBottom: '40px' }}>
          <Popover title="Создать новый файл">
            <div className="add-table-box" icon={<FileAddOutlined />}>
              <FileAddOutlined style={{ fontSize: '36px', color: '#666' }} />
            </div>
          </Popover>
        </Col>
      </Row>
      <Title type="primary" level={4}>Все сохраненные таблицы</Title>

      <div className='list-table'>
        {
          data.map((item, id) => {
            return (
              <SelectCard key={id} data={item} />
            )
          })
        }
      </div>
    </div>
  );
}

export default Tables;
