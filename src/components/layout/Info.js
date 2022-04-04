import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

import { Row, Col, Divider } from 'antd';
const style = { background: '#0092ff', padding: '8px 0' };

const Content = () => {
  return (
    <div className="site-layout-content">
      <Divider orientation="left">Bootcamps</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <div style={style}>
            Click to view
            <Button
              type="primary"
              size="small"
              style={{ float: 'right', backgroundColor: 'green' }}
            >
              Click here!
            </Button>
          </div>
        </Col>
      </Row>
      <Divider orientation="left">Courses</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <div style={style}>
            Click to view
            <Button
              type="primary"
              size="small"
              style={{ float: 'right', backgroundColor: 'green' }}
            >
              Click here!
            </Button>
          </div>
        </Col>
      </Row>
      <Divider orientation="left">Reviews</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <div style={style}>
            Read our customers reviews here!
            <Button
              type="primary"
              size="small"
              style={{ float: 'right', backgroundColor: 'green' }}
            >
              Click here!
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Content;
