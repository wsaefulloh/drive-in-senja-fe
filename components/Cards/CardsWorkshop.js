import React from "react";

// reactstrap components
import { Button, Card, CardBody, CardTitle, Col } from "reactstrap";

import "../../assets/css/main/main.module.css";

function CardWorkshop() {
  return (
    <>
      <Col>
        <Card>
          <div className="background__card__workshop"></div>
          <div className="w-100" style={{ padding: "15px" }}>
            <CardTitle className="mb-2" tag="h3" style={{ color: "#000000" }}>
              Card title
            </CardTitle>
            <div className="mb-2" tag="h3" style={{ color: "#000000" }}>
              Description workshop Description workshop Description workshop
              Description workshop Description workshop
            </div>
            <Button
              style={{
                color: "#ffffff",
                width: "100%",
                backgroundColor: "#FE7900",
                border: "0",
              }}
              type="button"
              className="w-100 p-1"
            >
              <span>Selengkapnya</span>
            </Button>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default CardWorkshop;
