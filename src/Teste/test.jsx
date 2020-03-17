import React from "react";
import FieldSME from "../components/@Fields";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { Form } from "@unform/web";
import { useRef } from "react";

export default function Test() {
  const testFomref = useRef(null);
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <h5 className="title">100 Awesome Nucleo Icons</h5>
              <p className="category">
                Handcrafted by our friends from{" "}
                <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a>
              </p>
            </CardHeader>
            <CardBody className="all-icons">
              <Form ref={testFomref}>
                <FieldSME type="text" name="Audio" />
                <FieldSME type="select" name="AudioSelect" options={[]} />
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
