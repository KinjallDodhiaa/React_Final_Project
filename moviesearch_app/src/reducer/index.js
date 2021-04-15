import { combineReducers } from "redux";


let searchResult = {
  data: [],
  status: ''
}

const searchReducer = (results = searchResult, action) => {

  console.log(action);

  switch (action.type) {

    case 'START':
      searchResult = { data: [], status: 'START' };
      return { ...searchResult };
    case 'SUCCESS':
      searchResult = { data: action.payload.Search, status: 'SUCCESS' };
      return { ...searchResult };
    case 'FAILED':
      searchResult = { data: [], status: 'FAILED' };
      return { ...searchResult };
    default:
      return results;
  }

};

export default combineReducers({
  results: searchReducer
  
});
