import React from "react";
import { Card, CardBody, Button, CardFooter } from "reactstrap";

import { ContainerSME } from "components/@Styles/style";

import PassaPorteForm from "./forms";

export default function Index() {
  return (
    <ContainerSME>
      <Card>
        <CardBody>
          <PassaPorteForm />
        </CardBody>
        <CardFooter>
          <Button className="btn-fill" color="primary" type="submit">
            Save
          </Button>
        </CardFooter>
      </Card>
    </ContainerSME>
  );
}
