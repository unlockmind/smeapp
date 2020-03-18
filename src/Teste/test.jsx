import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import FieldSME from "components/@LowCode/Fields";
import { Form } from "@unform/web";
import { useRef } from "react";
import TableSME from "../components/@LowCode/Table";

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
              <TableSME />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
