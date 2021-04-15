import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { getMovieData } from "../action";
import {connect} from 'react-redux'

const MovieCategories = ({ getMovieData }) => {
  const searchMovieCategoryOnClick = (e) => {
    getMovieData(e.target.name);
  };

  return (
    <div>
      <Container>
        <Row>
          <h1>Movies</h1>
          <Button name="action" onClick={searchMovieCategoryOnClick}>
            Action
          </Button>
          <Button name="thriller" onClick={searchMovieCategoryOnClick}>
            Thriller
          </Button>
          <Button name="horror" onClick={searchMovieCategoryOnClick}>
            Horror
          </Button>
          <Button name="drama" onClick={searchMovieCategoryOnClick}>
            Drama
          </Button>
          <Button name="comedy" onClick={searchMovieCategoryOnClick}>
            Comedy
          </Button>
          <Button name="documentary" onClick={searchMovieCategoryOnClick}>
            Documentary
          </Button>
          <Button name="animation" onClick={searchMovieCategoryOnClick}>
            Animation
          </Button>
          <Button name="anime" onClick={searchMovieCategoryOnClick}>
            Anime
          </Button>
          <Button name="science fiction" onClick={searchMovieCategoryOnClick}>
            Science fiction
          </Button>
          <Button name="cartoon" onClick={searchMovieCategoryOnClick}>
            Cartoon
          </Button>
          <Button name="crime" onClick={searchMovieCategoryOnClick}>
            Crime
          </Button>
          <Button name="love" onClick={searchMovieCategoryOnClick}>
            Romance
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default connect(null, { getMovieData })(MovieCategories);
