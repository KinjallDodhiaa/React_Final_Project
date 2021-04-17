import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import {removeFavorite} from "../action"
import * as TiIcons from "react-icons/ti";
const Favorite = (props) => {
  const removeFav = (idx) => {
    props.removeFavorite(idx);
  };
  return (
    <>
      <h2 style={{ color: "white",textAlign: 'center'}}>Favorite List</h2>
      <Container>
        <Row>
          {props.favList.map((elm, idx) =>
                <Col key={idx} className="p-3" lg="3" md="3" sm="1">
                  <Card className="cardBorder" style={{ width: "15rem" }}>
                    <Card.Img
                      className="objectfit"
                      variant="top"
                      src={elm.Poster}
                      height="300"
                    />
                    <Card.Body className="cardBodyColor">
                      <Card.Title className="text-center cardTitleHeight">
                        <h6>{elm.Title}</h6>
                      </Card.Title>
                      <Button
                        onClick={() => {
                          removeFav(idx);
                        }}
                      >
                        delete
                      </Button>
                      ;
                    </Card.Body>
                  </Card>
                </Col>)
          
         }
        </Row>
      </Container>
      ;
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    favList: state.favoriteResults,
  };
};
export default connect(mapStateToProps, { removeFavorite })(Favorite);
