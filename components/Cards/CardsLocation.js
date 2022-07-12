import React from "react";

// reactstrap components
import { Button, Card, CardBody, CardTitle, Col, Row } from "reactstrap";

import "../../assets/css/main/main.module.css";

function CardsLocation() {
  let html =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.318406580478!2d106.65193734989239!3d-6.221678995474059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbbff86ad0c5%3A0x7637aedafd55dea8!2sMall%20%40%20Alam%20Sutera!5e0!3m2!1sen!2sid!4v1657639650300!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  let result = html.replace('width="600"', 'width="100%"');
  let resultFinal = result.replace('height="450"', 'height="100%"');
  return (
    <>
      <Col className="p-0 m-0">
        <Row style={{ marginBottom: "15px" }}>
          <Col
            lg="6"
            className="p-4 m-0 background_location d-flex align-items-center justify-content-center"
          >
            <div className="text-center">
              <div className="justify-content-center mb-4">
                <img
                  alt="..."
                  src={require("assets/img/brand/DIS_Logo_1 1.png")}
                  width="120px"
                  className="mx-auto"
                />
              </div>
              <div className="justify-content-center mb-4">
                <h2 className="mb-4" style={{ color: "#ffffff" }}>
                  Mall Alam Sutera
                </h2>
                <p className="mb-4" style={{ color: "#ffffff" }}>
                  1 - 30 Juni 2022
                </p>
                <div className="px-3" style={{ color: "#ffffff" }}>
                  Jl. Jalur Sutera Bar. No.Kav. 16, RT.002/RW.003, Panunggangan
                  Tim., Kec. Pinang, Kota Tangerang, Banten 15143
                </div>
              </div>
              <Button
                color="secondary"
                style={{ color: "#FE7900" }}
                type="button"
              >
                Maps
              </Button>
            </div>
          </Col>
          <Col lg="6" className="p-0 m-0 background_maps">
            <div
              className="w-100 h-100"
              dangerouslySetInnerHTML={{ __html: resultFinal }}
            />
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default CardsLocation;
