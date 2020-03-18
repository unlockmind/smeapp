import React from "react";
import { Col, Row } from "reactstrap";
import FieldSME from "components/@LowCode/Fields";
import { Form } from "@unform/web";
import { useRef } from "react";

export default function PassaPorteForm() {
  const formRef = useRef(null);

  return (
    <Form ref={formRef}>
      <Row>
        <Col xl="4" md="4" className="df-pd-b">
          <FieldSME
            name="numero"
            type="text"
            Itype="input"
            label="Número do Passa Porte"
          />
        </Col>
        <Col xl="3" md="3" className="df-pd-b">
          <FieldSME
            name="emissao"
            type="date"
            Itype="input"
            label="Data Emissão"
          />
        </Col>
        <Col xl="3" md="3" className="df-pd-b">
          <FieldSME
            name="validade"
            type="date"
            Itype="input"
            label="Data Validade"
          />
        </Col>
        <Col xl="4" md="4" className="df-pd-b">
          <FieldSME
            name="postoRecebimentoId"
            Itype="select"
            label="Posto de Recebimento"
            options={[{ value: "Antonio", label: "Lopes" }]}
          />
        </Col>
        <Col xl="4" md="4" className="df-pd-b">
          <FieldSME
            name="estadoPassaPorte"
            Itype="select"
            label="Estado do Passa Porte"
            options={[{ value: "Antonio", label: "Lopes" }]}
          />
        </Col>
      </Row>
    </Form>
  );
}
