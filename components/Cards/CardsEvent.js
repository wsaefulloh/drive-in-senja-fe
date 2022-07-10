import React from "react";

// reactstrap components
import { Button, Card, CardBody, CardTitle, Col } from "reactstrap";

import "../../assets/css/main/main.module.css";

function CardEvents() {
  return (
    <>
      <Col>
        <Card className="background__card__events">
          <CardBody className="gradient__card__events d-flex align-items-end">
            <div className="w-100">
              <CardTitle className="mb-2" tag="h3" style={{ color: "#ffffff" }}>
                Card title
              </CardTitle>
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
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

export default CardEvents;
