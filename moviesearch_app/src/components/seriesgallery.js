  import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";

const SeriesGallery = (props) => {
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
                    <Card.Body>
                      <Card.Title
                        style={{ height: "3rem" }}
                        className="text-center"
                      >
                        {elm.Title}
                      </Card.Title>
                      <Card.Text className="text-center">{elm.Type}</Card.Text>
                    </Card.Body>
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
    data: state.results,
  };
};

export default connect(mapStateToProps)(SeriesGallery);
