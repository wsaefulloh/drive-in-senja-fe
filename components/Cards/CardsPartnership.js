import React from "react";

// reactstrap components
import { Button, Card, CardBody, CardTitle, Col } from "reactstrap";

import "../../assets/css/main/main.module.css";

function CardPartnership() {
  return (
    <>
      <Col>
        <Card className="background__card__partner">
          <CardBody className="gradient__card__partner d-flex flex-column justify-content-between">
            <div
              className="w-100 d-flex justify-content-center align-items-center"
              style={{ height: "175px" }}
            >
              <CardTitle
                className="mb-2 text-center"
                tag="h3"
                style={{ color: "#ffffff" }}
              >
                Partnership Title
              </CardTitle>
            </div>
            <div className="w-100">
              <Button
                style={{
                  color: "#FE7900",
                  width: "100%",
                  backgroundColor: "#ffffff",
                  border: "0",
                }}
                type="button"
                className="w-100 p-1"
              >
                <span>More</span>
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

export default CardPartnership;
