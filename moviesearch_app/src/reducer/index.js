import { combineReducers } from "redux";

let searchResult = {
  data: [],
  status: "",
};

const searchReducer = (results = searchResult, action) => {
  console.log(action);

  switch (action.type) {
    case "START":
      searchResult = { data: [], status: "START" };
      return { ...searchResult };
    case "SUCCESS":
      searchResult = { data: action.payload.Search, status: "SUCCESS" };
      return { ...searchResult };
    case "FAILED":
      searchResult = { data: [], status: "FAILED" };
      return { ...searchResult };
    default:
      return results;
  }
};

let movieSearchResult = {
  data: [],
  status: "",
};

const movieSearchReducer = (results = movieSearchResult, action) => {
  console.log(action);

  switch (action.type) {
    case "MOVIE_START":
      searchResult = { data: [], status: "START" };
      return { ...searchResult };
    case "MOVIE_SUCCESS":
      searchResult = { data: action.payload.Search, status: "SUCCESS" };
      return { ...searchResult };
    case "MOVIE_FAILED":
      searchResult = { data: [], status: "FAILED" };
      return { ...searchResult };
    default:
      return results;
  }
};

let seriesSearchResult = {
  data: [],
  status: "",
};

const seriesSearchReducer = (results = seriesSearchResult, action) => {
  console.log(action);

  switch (action.type) {
    case "SERIES_START":
      searchResult = { data: [], status: "START" };
      return { ...searchResult };
    case "SERIES_SUCCESS":
      searchResult = { data: action.payload.Search, status: "SUCCESS" };
      return { ...searchResult };
    case "SERIES_FAILED":
      searchResult = { data: [], status: "FAILED" };
      return { ...searchResult };
    default:
      return results;
  }
};


export default combineReducers({
  results: searchReducer,
  movieResults: movieSearchReducer,
  seriesResults: seriesSearchReducer,
});
