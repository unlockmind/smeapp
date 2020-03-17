import React from "react";
import FieldSME from "../components/@Fields";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { Form } from "@unform/web";
import { useRef } from "react";
const countryOptions = [
  { value: "af", label: "Afghanistan" },
  { value: "ax", label: "Aland Islands" },
  { value: "al", label: "Albania" },
  { value: "dz", label: "Algeria" },
  { value: "as", label: "American Samoa" },
  { value: "ad", label: "Andorra" },
  { value: "ao", label: "Angola" },
  { value: "ai", label: "Anguilla" },
  { value: "ag", label: "Antigua" },
  { value: "ar", label: "Argentina" },
  { value: "am", label: "Armenia" },
  { value: "aw", label: "Aruba" },
  { value: "au", label: "Australia" },
  { value: "at", label: "Austria" },
  { value: "az", label: "Azerbaijan" },
  { value: "bs", label: "Bahamas" },
  { value: "bh", label: "Bahrain" },
  { value: "bd", label: "Bangladesh" },
  { value: "bb", label: "Barbados" },
  { value: "by", label: "Belarus" },
  { value: "be", label: "Belgium" },
  { value: "bz", label: "Belize" },
  { value: "bj", label: "Benin" }
];
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
              <Form
                ref={testFomref}
                onSubmit={e => {
                  console.log(e);
                }}
              >
                <FieldSME
                  type="text"
                  name="Audio"
                  onChange={e => {
                    console.log(e.target.value);
                  }}
                />
                <FieldSME
                  type="select"
                  name="AudioSelect"
                  options={countryOptions}
                  onChange={e => {
                    console.log(e.value);
                  }}
                />
                <button type="submit">Entrar</button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
