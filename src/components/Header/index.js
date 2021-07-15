import React from 'react';

import { Row, Col } from 'react-bootstrap';
import { Image } from '../../components';

function Header() {
  return (
    <Row>
      <Col className="text-center py-4">
        <Image image="logo" />
      </Col>
    </Row>
  );
}

export default Header;
