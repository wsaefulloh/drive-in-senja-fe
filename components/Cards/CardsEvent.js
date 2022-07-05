import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// reactstrap components
import {
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Container,
  Row,
  Col,
} from "reactstrap";

import "../../assets/css/main/main.module.css";

function CardEvents() {
  return (
    <>
      <Col>
        <Card className="background__card__events">
          <CardBody className="gradient__card__events d-flex">
            <div className="w-100">
              <CardTitle className="mb-3" tag="h3" style={{ color: "#ffffff" }}>
                Card title
              </CardTitle>
              <Button
                style={{
                  color: "#ffffff",
                  width: "100%",
                  backgroundColor: "#FE7900",
                }}
                type="button"
                className="w-100"
              >
                Selengkapnya
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

export default CardEvents;
