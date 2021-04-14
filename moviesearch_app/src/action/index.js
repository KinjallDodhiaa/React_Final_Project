import { getResults } from '../api'

export const getMovieData = (movie) => {


  return dispatch => {

    dispatch({
      type: 'START',
      payload: []
    })
    getResults(movie).then(data => {
      dispatch({
        type: "SUCCESS",
        payload: data
      })
    }).catch(error => {
      dispatch({
        type: 'FAILED',
        payload: error
      })
    })
  }

}