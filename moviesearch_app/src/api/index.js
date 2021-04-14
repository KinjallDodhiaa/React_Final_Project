const getResults = (searchValue) => {
  return new Promise((resolve, reject) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
              resolve(data);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response.status);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export default getResults;
