import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { getSeriesData } from "../action";
import {connect} from 'react-redux'
const SeriesCategories = ({getSeriesData}) => {
  const searchMovieCategoryOnClick = (e) => {
    getSeriesData(e.target.name);
  };
  return (
    <div>
      <Container>
        <Row>
          <h1>Series</h1>
          <Button name="comedy" onClick={searchMovieCategoryOnClick}>
            Comedy
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
          <Button name="animation" onClick={searchMovieCategoryOnClick}>
            Animation
          </Button>
          <Button name="documentary" onClick={searchMovieCategoryOnClick}>
            Documentary
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
          <Button name="Crime" onClick={searchMovieCategoryOnClick}>
            Crime
          </Button>
         
        </Row>
      </Container>
    </div>
  );
};

export default connect(null, { getSeriesData })(SeriesCategories);
