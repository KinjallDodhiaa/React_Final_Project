import React, {useState} from "react";
import { Button, Card, Col, Container, Image, Modal, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { addToFavorite } from "../action";
import * as BsIcons from "react-icons/bs";

const SeriesGallery = (props) => {

      const [series, setSeries] = useState({
        show: false,
        seriesPreview: "",
        title: "",
        type: "",
        year: "",
      });

      const handleClose = () =>
        setSeries({
          show: false,
          seriesPreview: "",
          title: "",
          type: "",
          year: "",
        });

      const seriesShow = (poster, title, type, year) => {
        setSeries({
          show: true,
          moviePreview: poster,
          title: title,
          type: type,
          year: year,
        });
      };

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
                <Col key={idx} className="p-3" lg="3" md="3" sm="1">
                  <Card className="cardBorder" style={{ width: "15rem" }}>
                    <Card.Img
                      className="objectfit"
                      variant="top"
                      src={elm.Poster}
                      height="300"
                      onClick={() =>
                        seriesShow(elm.Poster, elm.Title, elm.Type, elm.Year)
                      }
                    />
                    <Card.Body className="cardBodyColor">
                      <Card.Title className="text-center cardTitleHeight">
                        <h6>{elm.Title}</h6>
                      </Card.Title>

                      <Card.Text className="text-center">{elm.Type}</Card.Text>

                    </Card.Body> 

                    </Card.Body>

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

                

                      {/* <Card.Text className="text-center">{elm.Type}</Card.Text> */}
                  


                    {/* <Card.Text className="text-center">{elm.Type}</Card.Text> */}

                  </Card>
                </Col>
              ) : null
            )}
          </Row>
          <Modal show={series.show} onHide={handleClose}>
            <Modal.Header
              style={{ backgroundColor: "#030617" }}
              className="cardBorder "
            >
              <Image className="modalImg" fluid src={series.moviePreview} />
            </Modal.Header>
            <Modal.Body className="cardBodyColor">
              <Modal.Title>{series.title}</Modal.Title>
              <p>{`Type: ${series.type}`}</p>
              <p>{`Year: ${series.year}`}</p>
            </Modal.Body>
            <Modal.Footer className="cardBodyColor">
              <Button
                className="cardBodyColor m-auto"
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
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
