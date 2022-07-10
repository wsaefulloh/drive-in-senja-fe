import React from "react";

// reactstrap components
import { Button, Card, CardBody, CardTitle, Col } from "reactstrap";

import "../../assets/css/main/main.module.css";

function CardJudges() {
  return (
    <>
      <Col>
        <Card>
          <div className="background__card__juree"></div>
          <div className="w-100" style={{ padding: "15px" }}>
            <CardTitle className="mb-2" tag="h3" style={{ color: "#000000" }}>
              Judges
            </CardTitle>
            <div className="mb-2" tag="h3" style={{ color: "#000000" }}>
              Description workshop Description workshop Description workshop
              Description workshop Description workshop
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default CardJudges;
