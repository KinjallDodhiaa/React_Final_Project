import React from "react";
import { Container, Row } from "react-bootstrap";
import { getSeriesData } from "../action";
import {connect} from 'react-redux';

const SeriesCategories = ({getSeriesData}) => {
  
  const searchMovieCategoryOnClick = (e) => {
    getSeriesData(e.target.name);
  };
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <div className="seriesBtnGroup">
            <h1 className="series">Series</h1>
            <button
              type="button"
              class="btn btn-dark"
              name="comedy"
              onClick={searchMovieCategoryOnClick}
            >
              Comedy
            </button>
            <button
              type="button"
              class="btn btn-dark"
              name="thriller"
              onClick={searchMovieCategoryOnClick}
            >
              Thriller
            </button>
            <button
              type="button"
              class="btn btn-dark"
              name="horror"
              onClick={searchMovieCategoryOnClick}
            >
              Horror
            </button>
            <button
              type="button"
              class="btn btn-dark"
              name="drama"
              onClick={searchMovieCategoryOnClick}
            >
              Drama
            </button>
            <button
              type="button"
              class="btn btn-dark"
              name="animation"
              onClick={searchMovieCategoryOnClick}
            >
              Animation
            </button>
            <button
              type="button"
              class="btn btn-dark"
              name="documentary"
              onClick={searchMovieCategoryOnClick}
            >
              Documentary
            </button>
            <button
              type="button"
              class="btn btn-dark"
              name="anime"
              onClick={searchMovieCategoryOnClick}
            >
              Anime
            </button>
            <button
              type="button"
              class="btn btn-dark"
              name="science fiction"
              onClick={searchMovieCategoryOnClick}
            >
              SF
            </button>
            <button
              type="button"
              class="btn btn-dark"
              name="cartoon"
              onClick={searchMovieCategoryOnClick}
            >
              Cartoon
            </button>
            <button
              type="button"
              class="btn btn-dark"
              name="Crime"
              onClick={searchMovieCategoryOnClick}
            >
              Crime
            </button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default connect(null, { getSeriesData })(SeriesCategories);
