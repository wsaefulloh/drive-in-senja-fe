import React from "react";
import { withRouter } from "next/router";
// core components
import HomeFooter from "components/Footers/HomeFooter.js";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

import ReactDatetime from "react-datetime";

function Register() {
  return (
    <>
      <div className="main-content" style={{ backgroundColor: "#FFF0F0" }}>
        <Container className="pt-4">
          <Col>
            <div>
              <img
                alt="..."
                src={require("assets/img/brand/DIS_Logo_1 1.png")}
                style={{ height: "50px" }}
              />
            </div>
          </Col>
        </Container>

        <Container className="pt-4">
          <Col>
            <h1>Kirimkan Karyamu</h1>
          </Col>
        </Container>

        <Container>
          <Row className="m-0 p-0 pt-1 pb-2">
            <Col lg="6" style={{ paddingLeft: "7.5px" }} className="pt-1 pb-1">
              <div className="text-justify" style={{ color: "#000000" }}>
                <span className="text-justify">
                  Drive-In Senja Film Festival adalah festival film tematik
                  tahunan yang diadakan oleh Drive-In Senja. Drive-In Senja Film
                  Festival berkomitmen untuk mengakselerasi para sineas baik
                  dalam berkarya maupun berjejaring. Yuk kirimkan karyamu
                  sekarang!
                </span>
              </div>
            </Col>
            <Col className="pt-1">
              <Row className="m-0 p-0 align-items-center">
                <div
                  className="p-1"
                  style={{ borderRadius: "10px", backgroundColor: "#000000" }}
                >
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/fa-solid_search.svg")}
                    style={{ height: "15px" }}
                  />
                </div>
                <Col>
                  <div className="text-justify" style={{ color: "#000000" }}>
                    <span className="text-justify">
                      Karyamu akan ditinjau terlebih dahulu oleh tim Drive-In
                      Senja
                    </span>
                  </div>
                </Col>
              </Row>
              <Row className="m-0 p-0 align-items-center pt-1">
                <div
                  className="p-1"
                  style={{ borderRadius: "10px", backgroundColor: "#000000" }}
                >
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/eva_email-outline.svg")}
                    style={{ height: "15px" }}
                  />
                </div>
                <Col>
                  <div className="text-justify" style={{ color: "#000000" }}>
                    <span className="text-justify">
                      Setelah karyamu ditinjau dan diterima, kami akan
                      menghubungi kamu
                    </span>
                  </div>
                </Col>
              </Row>
              <Row className="m-0 p-0 align-items-center pt-1">
                <div
                  className="p-1"
                  style={{ borderRadius: "10px", backgroundColor: "#000000" }}
                >
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/akar-icons_clock.svg")}
                    style={{ height: "15px" }}
                  />
                </div>
                <Col>
                  <div className="text-justify" style={{ color: "#000000" }}>
                    <span className="text-justify">
                      Peninjauan karya akan berlangsung maksimal 7x24 jam
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container className="pt-4">
          <Col>
            <Card className="p-4">
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="customCheck1"
                    type="checkbox"
                    //   checked={isAllChecked}
                    //   onChange={handleAllCheck}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="customCheck1"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Film Pendek (Max 20 Menit)
                    </span>
                  </label>
                </Col>
              </div>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Nama</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      First name
                    </label>
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                  <Col className="mb-3" md="6">
                    <Input
                      id="validationCustom02"
                      type="text"
                      //   valid={lastNameState === "valid"}
                      //   invalid={lastNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setlastName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setlastNameState("invalid");
                      //     } else {
                      //       setlastNameState("valid");
                      //     }
                      //   }}
                    />
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom02"
                      style={{ fontSize: "10px" }}
                    >
                      Last name
                    </label>
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Tanggal Lahir</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Col md="6" style={{ paddingLeft: "0px", paddingRight: "5px" }}>
                <FormGroup>
                  <ReactDatetime inputProps={{}} timeFormat={false} />
                </FormGroup>
              </Col>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Kewarganegaraan</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Negara
                    </label>
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">No. Telepon</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Email</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="email"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Alamat</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="email"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Nama Jalan
                    </label>
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />

                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Keterangan
                    </label>
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />

                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Kota/Kabupaten
                    </label>
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />

                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Provinsi
                    </label>
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />

                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Kode Pos
                    </label>
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />

                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Negara
                    </label>
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />

                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-3 pb-2">
                <h2 className="m-0 p-0 pr-2">FILM</h2>
              </div>
              <div
                style={{
                  backgroundColor: "#000000",
                  width: "100%",
                  height: "1px",
                  marginBottom: "20px",
                }}
              ></div>
              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Judul</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>
              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Negara Tempat Produksi</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>
              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Tahun Produksi</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>
              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Tipe Film</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="customCheck1"
                    type="radio"
                    name="tipeFilm"
                    //   checked={isAllChecked}
                    //   onChange={handleAllCheck}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="customCheck1"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Film Pendek (Max 20 Menit)
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="customCheck1"
                    type="radio"
                    name="tipeFilm"
                    //   checked={isAllChecked}
                    //   onChange={handleAllCheck}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="customCheck1"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Film Pendek (Max 20 Menit)
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="customCheck1"
                    type="radio"
                    name="tipeFilm"
                    //   checked={isAllChecked}
                    //   onChange={handleAllCheck}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="customCheck1"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Film Pendek (Max 20 Menit)
                    </span>
                  </label>
                </Col>
              </div>
              <div className="d-flex align-items-center mt-3 pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Status Premier</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Festival film yang pernah diikuti
                </h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Isi dengan (-) jika karya kamu belum pernah diikutkan
                      dalam festival film manapun
                    </label>
                    <Input
                      id="validationCustom01"
                      type="textarea"
                      rows="5"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />

                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Penghargaan (jika ada) yang pernah dimenangkan
                </h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Isi dengan (-) jika tidak ada penghargaan yang dimenangkan
                    </label>
                    <Input
                      id="validationCustom01"
                      type="textarea"
                      rows="5"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />

                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Sinopsis</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="textarea"
                      rows="5"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />

                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-3 pb-2">
                <h2 className="m-0 p-0 pr-2">PRODUKSI</h2>
              </div>
              <div
                style={{
                  backgroundColor: "#000000",
                  width: "100%",
                  height: "1px",
                  marginBottom: "20px",
                }}
              ></div>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Nama</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Alamat</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="email"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Nama Jalan
                    </label>
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />

                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Keterangan
                    </label>
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />

                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Kota/Kabupaten
                    </label>
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />

                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Provinsi
                    </label>
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />

                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Kode Pos
                    </label>
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />

                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Negara
                    </label>
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />

                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Email</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="email"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Apakah kamu punya agen promosi di Indonesia?
                </h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="customCheck1"
                    type="radio"
                    name="agen"
                    //   checked={isAllChecked}
                    //   onChange={handleAllCheck}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="customCheck1"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Film Pendek (Max 20 Menit)
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="customCheck1"
                    type="radio"
                    name="agen"
                    //   checked={isAllChecked}
                    //   onChange={handleAllCheck}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="customCheck1"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Film Pendek (Max 20 Menit)
                    </span>
                  </label>
                </Col>
              </div>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Apakah kamu mengizinkan Drive-In Senja untuk mendistribusikan
                  film kamu?
                </h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="customCheck1"
                    type="radio"
                    name="agenDistribusi"
                    //   checked={isAllChecked}
                    //   onChange={handleAllCheck}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="customCheck1"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Film Pendek (Max 20 Menit)
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="customCheck1"
                    type="radio"
                    name="agenDistribusi"
                    //   checked={isAllChecked}
                    //   onChange={handleAllCheck}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="customCheck1"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Film Pendek (Max 20 Menit)
                    </span>
                  </label>
                </Col>
              </div>

              <div className="d-flex align-items-center pt-3 pb-2">
                <h2 className="m-0 p-0 pr-2">PRODUKSI</h2>
              </div>
              <div
                style={{
                  backgroundColor: "#000000",
                  width: "100%",
                  height: "1px",
                  marginBottom: "20px",
                }}
              ></div>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Sutradara</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Harap pisahkan dengan koma (,) jika sutradara lebih dari
                      satu
                    </label>
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Produser</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Harap pisahkan dengan koma (,) jika produser lebih dari
                      satu
                    </label>
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Penulis Naskah</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Harap pisahkan dengan koma (,) jika penulis naskah lebih
                      dari satu
                    </label>
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Sinematografer</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Harap pisahkan dengan koma (,) jika sinematografer lebih
                      dari satu
                    </label>
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Editor</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Harap pisahkan dengan koma (,) jika editor lebih dari satu
                    </label>
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Pemain</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Harap pisahkan dengan koma (,) jika pemain lebih dari satu
                    </label>
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Foto Sutradara - Google Drive / Cloud Storage URL
                </h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      placeholder="https://"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Biografi singkat Sutradara</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="textarea"
                      rows="5"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />

                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-3 pb-2">
                <h2 className="m-0 p-0 pr-2">TECHNICAL FEATURE</h2>
              </div>
              <div
                style={{
                  backgroundColor: "#000000",
                  width: "100%",
                  height: "1px",
                  marginBottom: "20px",
                }}
              ></div>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Durasi</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      ex: 01:45
                    </label>
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Shooting Format</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      ex: HDcam/HDV/16mm/35mm etc
                    </label>
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Screening Format</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      ex: DCP/BluRay/DVD/Quicktime
                    </label>
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Rasio Layar</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      ex: 1.37/1.66/2.35
                    </label>
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Frame Rate</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="customCheck1"
                    type="radio"
                    name="tipeFilm"
                    //   checked={isAllChecked}
                    //   onChange={handleAllCheck}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="customCheck1"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Film Pendek (Max 20 Menit)
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="customCheck1"
                    type="radio"
                    name="tipeFilm"
                    //   checked={isAllChecked}
                    //   onChange={handleAllCheck}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="customCheck1"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Film Pendek (Max 20 Menit)
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="customCheck1"
                    type="radio"
                    name="tipeFilm"
                    //   checked={isAllChecked}
                    //   onChange={handleAllCheck}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="customCheck1"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Film Pendek (Max 20 Menit)
                    </span>
                  </label>
                </Col>
              </div>
              <Form className="needs-validation pt-2" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="4">
                    <Input
                      id="validationCustom01"
                      type="text"
                      placeholder="Lainnya"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Sound</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="customCheck1"
                    type="radio"
                    name="tipeFilm"
                    //   checked={isAllChecked}
                    //   onChange={handleAllCheck}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="customCheck1"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Film Pendek (Max 20 Menit)
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="customCheck1"
                    type="radio"
                    name="tipeFilm"
                    //   checked={isAllChecked}
                    //   onChange={handleAllCheck}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="customCheck1"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Film Pendek (Max 20 Menit)
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="customCheck1"
                    type="radio"
                    name="tipeFilm"
                    //   checked={isAllChecked}
                    //   onChange={handleAllCheck}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="customCheck1"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Film Pendek (Max 20 Menit)
                    </span>
                  </label>
                </Col>
              </div>
              <Form className="needs-validation pt-2" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="4">
                    <Input
                      id="validationCustom01"
                      type="text"
                      placeholder="Lainnya"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Bahasa</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Language of Subtitles</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">URL Video for Preview</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      placeholder="https://"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Password untuk URL VIdeo Peview (jika ada)
                </h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Dokumentasi - Google Drive / Cloud Storage URL
                </h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      placeholder="https://"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Poster / Artwork - Google Drive / Cloud Storage URL
                </h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      placeholder="https://"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Subtitle File - Google Drive / Cloud Strorage URL
                </h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      placeholder="https://"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">URL Trailer</h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="validationCustom01"
                      type="text"
                      placeholder="https://"
                      //   valid={firstNameState === "valid"}
                      //   invalid={firstNameState === "invalid"}
                      //   onChange={(e) => {
                      //     setfirstName(e.target.value);
                      //     if (e.target.value === "") {
                      //       setfirstNameState("invalid");
                      //     } else {
                      //       setfirstNameState("valid");
                      //     }
                      //   }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-3 pb-2">
                <h2 className="m-0 p-0 pr-2">PERSETUJUAN</h2>
              </div>
              <div
                style={{
                  backgroundColor: "#000000",
                  width: "100%",
                  height: "1px",
                  marginBottom: "20px",
                }}
              ></div>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  PERJANJIAN UNTUK BERPARTISIPASI DALAM PROGRAM LAYAR
                  NON-FESTIVAL
                </h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <label
                className="form-control-label"
                htmlFor="validationCustom01"
                style={{ fontSize: "10px" }}
              >
                Selain menyelenggarakan Drive-In Senja Film Festival, Komite
                Drive-In Senja juga mengadakan beberapa pemutaran non-festival
                yang bertujuan untuk mempromosikan film-film Asia dan mendidik
                masyarakat tentang perfilman. Saya memberikan izin kepada Komite
                Drive-In Senja untuk menggunakan salinan h264 atau MPEG-4 dari
                film tersebut dalam program pemutaran non-festival Drive-In
                Senja selama program tersebut diadakan untuk tujuan pendidikan
                dan bukan untuk tujuan komersial, dan bahwa Saya mendapat
                pemberitahuan setiap kali Komite akan menggunakan salinan film
                saya.
              </label>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="customCheck1"
                    type="radio"
                    name="agenDistribusi"
                    //   checked={isAllChecked}
                    //   onChange={handleAllCheck}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="customCheck1"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Film Pendek (Max 20 Menit)
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="customCheck1"
                    type="radio"
                    name="agenDistribusi"
                    //   checked={isAllChecked}
                    //   onChange={handleAllCheck}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="customCheck1"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Film Pendek (Max 20 Menit)
                    </span>
                  </label>
                </Col>
              </div>

              <div className="d-flex align-items-center pt-4 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  PERJANJIAN UNTUK MEMBERI IZIN KEPADA KOMITE DRIVE-IN SENJA
                  UNTUK MENJAGA SALINAN FILM
                </h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>
              <label
                className="form-control-label"
                htmlFor="validationCustom01"
                style={{ fontSize: "10px" }}
              >
                Komite Drive-In Senja memiliki dan mengelola Drive-In Senja film
                library. Drive-In Senja film library ini dibangun sebagai bagian
                dari tugas tim Drive-In Senja untuk mengarsipkan film dan
                mengedukasi masyarakat Indonesia tentang perfilman. Saya
                memberikan izin kepada Komite Drive-In Senja untuk menyimpan
                salinan h264 atau MPEG-4 dari film tersebut di Drive-In Senja
                film library dan memberikan izin kepada Komite Drive-In Senja
                untuk menggunakannya untuk tujuan pendidikan dan bukan untuk
                tujuan komersial, dan bahwa saya mendapat pemberitahuan setiap
                kali tim Drive-In Senja akan menggunakan salinannya dalam
                acara-acara yang melibatkan publik.
              </label>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="customCheck1"
                    type="radio"
                    name="agenDistribusi"
                    //   checked={isAllChecked}
                    //   onChange={handleAllCheck}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="customCheck1"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Film Pendek (Max 20 Menit)
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="customCheck1"
                    type="radio"
                    name="agenDistribusi"
                    //   checked={isAllChecked}
                    //   onChange={handleAllCheck}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="customCheck1"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Film Pendek (Max 20 Menit)
                    </span>
                  </label>
                </Col>
              </div>

              <div className="d-flex align-items-center pt-4 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  PARTISIPASI DALAM FILM AGREEMENT
                </h4>
                <span style={{ fontStyle: "italic", color: "#B00505" }}>
                  (Wajib diisi!)
                </span>
              </div>

              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="customCheck1"
                    type="radio"
                    name="agenDistribusi"
                    //   checked={isAllChecked}
                    //   onChange={handleAllCheck}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="customCheck1"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Film Pendek (Max 20 Menit)
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="customCheck1"
                    type="radio"
                    name="agenDistribusi"
                    //   checked={isAllChecked}
                    //   onChange={handleAllCheck}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="customCheck1"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Film Pendek (Max 20 Menit)
                    </span>
                  </label>
                </Col>
              </div>

              <Button
                color="secondary"
                style={{
                  color: "#000000",
                  backgroundColor: "#FE7900",
                  maxWidth: "150px",
                }}
                type="button"
                className="mt-4"
              >
                Kirim
              </Button>
            </Card>
          </Col>
        </Container>

        <HomeFooter />
      </div>
    </>
  );
}

export default Register;
