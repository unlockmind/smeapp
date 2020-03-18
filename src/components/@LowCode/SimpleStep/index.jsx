import React, { useState } from "react";

import { Button, ButtonGroup } from "reactstrap";
import classNames from "classnames";

function SMESimpleStep({ data, onClickStep }) {
  const [bigChartData, setBgChartData] = useState("");
  return (
    <>
      <ButtonGroup
        className="btn-group-toggle float-right"
        data-toggle="buttons"
      >
        {data.map((step, i) => {
          return (
            <Button
              key={i}
              tag="label"
              className={classNames("btn-simple", {
                active: bigChartData === step.id
              })}
              color="info"
              id="0"
              size="sm"
              onClick={() => {
                setBgChartData(step.id);
                onClickStep(step.id);
              }}
            >
              <input
                defaultChecked
                className="d-none"
                name="options"
                type="radio"
              />
              <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                {step.title}
              </span>
              <span className="d-block d-sm-none">
                <i className="tim-icons icon-single-02" />
              </span>
            </Button>
          );
        })}
      </ButtonGroup>
    </>
  );
}

export default SMESimpleStep;
