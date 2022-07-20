import React from "react";
import Link from "next/link";

// reactstrap components
import { Button, Card, CardBody, CardTitle, Col } from "reactstrap";

import PropTypes from "prop-types";

import "../../assets/css/main/main.module.css";

function CardFilms(props) {
  let { img, id, title, genre, date, url } = props;

  let newDate = date.split("-");

  return (
    <>
      <Col>
        <Card
          style={{
            backgroundImage:
              "url(" +
              `https://drive.google.com/uc?export=view&id=${img}` +
              ")",
            height: "350px",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <CardBody className="gradient__card__events d-flex align-items-end">
            <div className="w-100">
              <CardTitle className="mb-3" tag="h3" style={{ color: "#ffffff" }}>
                {title}
              </CardTitle>
              <div>{genre}</div>
              <div className="mb-3">{newDate[1]}</div>

              <div className="d-flex justify-content-center align-items-center">
                <Link href={`/film-details/${id}`}>
                  <Button
                    style={{
                      color: "#FE7900",
                      width: "100%",
                      backgroundColor: "#ffffff",
                    }}
                    type="button"
                    className="w-100 p-1"
                  >
                    Details
                  </Button>
                </Link>

                <Button
                  style={{
                    color: "#ffffff",
                    width: "100%",
                    backgroundColor: "#FE7900",
                  }}
                  type="button"
                  className="w-100 p-1"
                >
                  Beli
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

CardFilms.propTypes = {
  img: PropTypes.any,
  title: PropTypes.string,
  id: PropTypes.string,
  genre: PropTypes.string,
  date: PropTypes.string,
  url: PropTypes.string,
};

export default CardFilms;
