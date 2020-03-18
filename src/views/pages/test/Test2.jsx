import React from "react";

// import { Container } from './styles';

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

export default function test2() {
  return (
    <>
      <div className='content'>
        <Row>
          <Col md='8'>
            <Card>
              <CardHeader>
                <h5 className='title'>Edit Profile</h5>
              </CardHeader>
              <CardBody></CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
