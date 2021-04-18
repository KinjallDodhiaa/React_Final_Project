import React, {useState} from "react";
import { Card, Container, Row, Col, Image, Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addToFavorite } from "../action";
import * as BsIcons from "react-icons/bs";

const MovieGallery = (props) => {

    const [movie, setMovie] = useState({
      show: false,
      moviePreview: "",
      title: "",
      type: "",
      year: "",
    });

    const handleClose = () =>
      setMovie({
        show: false,
        moviePreview: "",
        title: "",
        type: "",
        year: "",
      });

    const movieShow = (poster, title, type, year) => {
      setMovie({
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
            {props.data.data.map((elm, idx) => (
              <Col key={idx} className="p-3" lg="4" md="3" sm="1">
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={elm.Poster}
                    height="250"
                    onClick={() =>
                      movieShow(elm.Poster, elm.Title, elm.Type, elm.Year)
                    }
                  />
                  <Card.Body>
                    <Card.Title
                      style={{ height: "3rem" }}
                      className="text-center"
                    >
                      {elm.Title}
                    </Card.Title>
                    <Card.Text className="text-center">{elm.Type}</Card.Text>
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
                    {console.log(props.favList)}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Modal show={movie.show} onHide={handleClose}>
            <Modal.Header style={{ backgroundColor: "#030617" }}>
              <Image className="modalImg" fluid src={movie.moviePreview} />
            </Modal.Header>
            <Modal.Body className="cardBodyColor">
              <Modal.Title>{movie.title}</Modal.Title>
              <p>{`Type: ${movie.type}`}</p>
              <p>{`Year: ${movie.year}`}</p>
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
    data: state.movieResults,
    favList: state.favoriteResults,
  };
};

export default connect(mapStateToProps, { addToFavorite })(MovieGallery);
