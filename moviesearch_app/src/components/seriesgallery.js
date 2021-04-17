import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { addToFavorite } from "../action";
import * as BsIcons from "react-icons/bs";

const SeriesGallery = (props) => {
     const addBtnFav = (elm) => {
       props.addToFavorite(elm);
     };
  switch (props.data.status) {
    case "START":
      return <h1>LOADING...</h1>;
    case "FAILED":
      return <h1>FAILED</h1>;
    case "SUCCESS":
      return (
        <Container>
          <Row>
            {props.data.data.map((elm, idx) =>
              elm.Type === "series" ? (
                <Col key={idx} className="p-3" lg="4" md="3" sm="1">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={elm.Poster} height="250" />
                    {/* <Card.Body>
                      <Card.Title
                        style={{ height: "0.8rem"}}
                        className="text-center"
                      >
                        {elm.Title}
                      </Card.Title>
                      <Card.Text className="text-center">{elm.Type}</Card.Text>
                    </Card.Body> */}
                    {!props.favList.some((e) => e.imdbID === elm.imdbID) ? (
                      <BsIcons.BsFillStarFill
                        className="fav-icon"
                        onClick={() => {
                          addBtnFav(elm);
                        }}
                      />
                    ) : (
                      <BsIcons.BsBookmarkCheck className="bookmark-icon" />
                    )}
                    />
                  </Card>
                </Col>
              ) : null
            )}
          </Row>
        </Container>
      );
    default:
      return null;
  }
};

const mapStateToProps = (state) => {
  return {
    data: state.seriesResults,
    favList: state.favoriteResults,
  };
};

export default connect(mapStateToProps,{addToFavorite})(SeriesGallery);
