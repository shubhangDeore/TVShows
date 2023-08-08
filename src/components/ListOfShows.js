import React, { useState, useEffect } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import { Button } from "@mui/material";

export function ListOfShows() {
  const [tvshowsArr, settvshowsArr] = useState([]);
  const navigate = useNavigate();

  let API = "https://api.tvmaze.com/search/shows?q=all";
  const fetchtvmazeShows = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      settvshowsArr(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchtvmazeShows(API);
  }, []);

  const openShowDetails = (show) => {
    navigate("/showdetails", { state: { show: show } });
  };

  return (

      <Container>
      <h1>List of Shows :-</h1>

        <Row>
          {tvshowsArr.map((tvshow) => {
            return (
              <Col sm={4} md={4} lg={4}>
                <div
                  onClick={() => {
                    openShowDetails(tvshow?.show);
                  }}
                  style={styles.mainDiv}
                >
                  <h1 style={{ fontSize: 22 }}>{tvshow?.show?.name}</h1>
                  <img src={tvshow?.show?.image?.medium ? tvshow?.show?.image?.medium : tvshow?.show?.image?.original}></img>
                  <Button
                    onClick={() => {
                      openShowDetails(tvshow?.show);
                    }}
                    style={styles.detailsBtn}
                    variant="contained"
                  >
                    {" "}
                    View Details of {tvshow?.show?.name}
                  </Button>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
  );
}

const styles = {
  mainDiv: {
    fontSize: 22,
    textAlign: "center",
   
    fontFamily: "Arial",
    maxWidth: "550px",
    margin: "0 auto",
    border: "1px solid #e6e6e6",
    padding: "40px 25px",
    marginTop: "50px",
    cursor: "pointer",
  },
  detailsBtn: {
    // margin: "-90px auto 30px",
    // width: "100px",
    // borderRadius: "70%",
    objectFit: "cover",
    backgroundColor: "#3c948b",
    marginBottom: "0",
    padding: 10,
    color: "white",
  },
};
