import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { getMovieData } from "../action";
import { connect } from 'react-redux'

const MovieCategories = ({ getMovieData }) => {
  const searchMovieCategoryOnClick = (e) => {
    getMovieData(e.target.name);
  };

  return (
    <div>
      <Container className="mt-5">
        <Row>
          <div className="seriesBtnGroup">
            <h1 className="series">Movies</h1>
            <button
              type="button"
              class="btn btn-dark"
              name="action"
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
              name="comedy"
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
              name="animation"
              onClick={searchMovieCategoryOnClick}
            >
              Animation
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
              name="crime"
              onClick={searchMovieCategoryOnClick}
            >
              Crime
            </button>
            <button
              type="button"
              class="btn btn-dark"
              name="love"
              onClick={searchMovieCategoryOnClick}
            >
              Love
            </button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default connect(null, { getMovieData })(MovieCategories);
