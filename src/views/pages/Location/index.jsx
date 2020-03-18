import React, { useEffect } from "react";

import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

import SMESimpleStep from "../../../components/SimpleStep";

function SMELocation() {
  useEffect(() => {
    document.title = "Gestão de Localização";
  }, []);

  const steps = [
    {
      id: "step1",
      title: "Províncias"
    },
    {
      id: "step2",
      title: "Municípios"
    },
    {
      id: "step3",
      title: "Comunas/Distritos"
    },
    {
      id: "step4",
      title: "Bairros"
    },
    {
      id: "step5",
      title: "Ruas"
    }
  ];

  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">
                      Área reservada à gestão de localização
                    </h5>
                    {/* <CardTitle tag="h2">Performance</CardTitle> */}
                  </Col>
                  <Col sm="6">
                    <SMESimpleStep
                      data={steps}
                      onClickStep={e => {
                        alert(e);
                      }}
                    />
                  </Col>
                </Row>
              </CardHeader>

              <CardBody></CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SMELocation;
