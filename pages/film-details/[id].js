import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

import { fetchWrapper } from "../../helpers/fetch-wrapper";

// layout for this page
import HomeLayout from "layouts/Homepage.js";

import "../../assets/css/main/main.module.css";
import { useRouter } from "next/router";

function FilmDetails() {
  const router = useRouter();
  const url_page = router.asPath;
  const id = url_page.substring(14, url_page.length);
  console.log(url_page);
  console.log(id);

  const [film, setFilm] = useState({});
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const getFilm = async () => {
    const data = await fetchWrapper.get(`../api/film-list/get-film?film=${id}`);
    if (data) {
      const newData = data.data;
      setFilm(newData[0]);
      let dataObj = newData[0];
      let newDuration = dataObj.duration.split(":");
      let hours = newDuration[0];
      let minute = newDuration[1];
      if (hours == "00") {
        setDuration(`${minute} Minutes`);
      } else {
        setDuration(`${hours} Hours ${minute} Minutes`);
      }
      let date = dataObj.date_playing.split("-");
      setDate(`${date[0]}, ${date[1]}`);
      setTime(`${date[2]}`);
    }
  };

  const getMedia = async () => {
    const data = await fetchWrapper.get(`../api/film-list/get-film?film=${id}`);
    if (data) {
      const newData = data.data;
      setFilm(newData[0]);
      let dataObj = newData[0];
      let newDuration = dataObj.duration.split(":");
      let hours = newDuration[0];
      let minute = newDuration[1];
      if (hours == "00") {
        setDuration(`${minute} Minutes`);
      } else {
        setDuration(`${hours} Hours ${minute} Minutes`);
      }
      let date = dataObj.date_playing.split("-");
      setDate(`${date[0]}, ${date[1]}   ${date[2]}`);
    }
  };

  useEffect(() => {
    getFilm();
    console.log(film);
  }, []);

  useEffect(() => {
    console.log(film);
  }, [film]);

  return (
    <>
      <Container
        className="p-0 m-0"
        style={{
          backgroundImage:
            "url(" +
            `https://drive.google.com/uc?export=view&id=${film.cover_image}` +
            ")",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          maxWidth: "100%",
        }}
      >
        <div className="gradient__card__detail_film">
          <Container>
            <Row className="m-0 align-items-center py-5">
              <Col lg="4" className="text-center">
                <div
                  className="title_cover"
                  style={{
                    backgroundImage:
                      "url(" +
                      `https://drive.google.com/uc?export=view&id=${film.poster_image}` +
                      ")",
                    width: "270px",
                    height: "400px",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                >
                  {/* <img
                    alt="..."
                    src={require("assets/img/theme/image 6.svg")}
                    height="100%"
                  /> */}
                </div>
              </Col>
              <Col>
                <h1 style={{ color: "#ffffff" }}>{film.title}</h1>
                <div className="d-flex align-items-center mt-3">
                  <div
                    className="py-1 px-2 mr-2"
                    style={{
                      color: "#ffffff",
                      backgroundColor: "#FE7900",
                      borderRadius: "5px",
                    }}
                  >
                    R
                  </div>
                  <p style={{ color: "#ffffff" }}>{duration}</p>
                </div>
                <h2 className="mt-3" style={{ color: "#ffffff" }}>
                  {film.genre}
                </h2>
                <div className="mt-3" style={{ color: "#ffffff" }}>
                  {film.description}
                </div>
                <h2 className="mt-3" style={{ color: "#FE7900" }}>
                  {film.location}
                </h2>
                <div className="d-flex">
                  <h3 className="mt-3" style={{ color: "#ffffff" }}>
                    {date}
                  </h3>
                  <h3 className="mt-3 ml-3" style={{ color: "#ffffff" }}>
                    {time}
                  </h3>
                </div>

                <Button
                  style={{ color: "#ffffff", backgroundColor: "#FE7900" }}
                  type="button"
                  className="mt-3"
                >
                  Beli Tiket
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>

      <Container className="d-flex align-items-center justify-content-between pt-4">
        <Col>
          <h2 style={{ color: "#FE7900" }}>Video & Photo</h2>
        </Col>
      </Container>

      <Container className="pt-4">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 box">
          <Col>
            <Card>
              <div>
                <img
                  alt="..."
                  className="w-100"
                  src={require("assets/img/theme/main-index.svg")}
                />
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div>
                <img
                  alt="..."
                  className="w-100"
                  src={require("assets/img/theme/main-index.svg")}
                />
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div>
                <img
                  alt="..."
                  className="w-100"
                  src={require("assets/img/theme/main-index.svg")}
                />
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div>
                <img
                  alt="..."
                  className="w-100"
                  src={require("assets/img/theme/main-index.svg")}
                />
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div>
                <img
                  alt="..."
                  className="w-100"
                  src={require("assets/img/theme/main-index.svg")}
                />
              </div>
            </Card>
          </Col>
        </div>
      </Container>
    </>
  );
}

FilmDetails.layout = HomeLayout;

export default FilmDetails;
