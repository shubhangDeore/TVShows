import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-grid-system";
import { Card, Container } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ReactStars from "react-rating-stars-component";

export function ShowDetails() {
  const location = useLocation();

  useEffect(() => {}, []);

  const renderGenres = (itemList) =>
    itemList.map((item, index) => (
      <span>
        {" "}
        {item} {itemList.length - 1 == index ? "" : "|"}{" "}
      </span>
    ));

  const ratingChanged = () => {};

  return (
    <Container style={Style.mainContainer}>
      <Link to="/">
        <ArrowBackIosIcon style={Style.backBtn} />
      </Link>

      <Row>
        <Col sm={3} md={3} lg={3}>
          <div style={Style.detail_img}>
            <img src={location.state.show?.image?.medium}></img>
          </div>
        </Col>

        <Col sm={5} md={5} lg={5}>
          <div>
            <p style={Style.showSummary}>
              {location.state.show.summary.replace(/<[^>]+>/g, "")}
            </p>
          </div>
        </Col>
        <Col sm={4} md={4} lg={4}>
          <Card variant="outlined" style={Style.card}>
            <p style={Style.showInfo}> Show info: </p>

            <div style={Style.cardBody}>
              <span style={{ fontWeight: "bold" }}>Network:</span>
              &nbsp; {location.state.show.network?.country?.name} &nbsp;
              <span>(</span>
              {location.state.show.network?.country?.timezone}
              <span>)</span>
            </div>
            <div style={Style.cardBody}>
              <span style={{ fontWeight: "bold" }}>Schedule:</span>
              &nbsp; {location.state.show.schedule.time}{" "}
              {location.state.show.schedule.days[0]}
            </div>
            <div style={Style.cardBody}>
              <span style={{ fontWeight: "bold" }}> status:</span>
              &nbsp; {location.state.show.status}
            </div>
            <div style={Style.cardBody}>
              <span style={{ fontWeight: "bold" }}> Show Type:</span>
              &nbsp; {location.state.show.type}
            </div>
            <div style={Style.cardBody}>
              <span style={{ fontWeight: "bold" }}>Genres:</span>
              {renderGenres(location.state?.show?.genres)}
            </div>
            <div style={Style.cardBody}>
              <span style={{ fontWeight: "bold" }}>Episodes ordered:</span>
              &nbsp; N.A.
            </div>
            <div style={Style.cardBody}>
              <span style={{ fontWeight: "bold" }}>Official Site: </span>
              &nbsp;
              <a href={location.state.show.officialSite}>
                {" "}
                {location.state.show.officialSite}
              </a>
            </div>
            <div style={Style.ratingMainDiv}>
              <Row>
                <Col md={6} lg={6}>
                  <ReactStars
                    count={location.state.show?.rating?.average}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
                </Col>
                <Col>
                  <div style={Style.ratingDiv}>
                    {location.state.show?.rating?.average}
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

const Style = {
  mainContainer: { flex: 1, padding: 40 },
  backBtn: { color: "#3c948b" },
  detailstyle: {
    fontSize: 22,
    textAlign: "center",

    fontFamily: "Arial",

    margin: "0 auto",

    padding: "40px 25px",
  },
  detail_styles: {
    fontWeight: "bold",
    color: "black",
    marginBottom: "10px",
  },
  detail_img: {
    border: "10px solid transparent",
    padding: "15px",
  },
  showInfo: {
    fontSize: 32,
    fontWeight: "normal",
    margin: 0,
    marginBottom: 15,
  },
  card: { padding: 10, lineHeight: 1.5, background: "#f7f7f7" },
  showSummary: { fontFamily: "helvetica", lineHeight: 1.6 },
  ratingDiv: { fontWeight: "bold", marginTop: 4 },
  ratingMainDiv: { flex: 1, flexDirection: "row" },
};
