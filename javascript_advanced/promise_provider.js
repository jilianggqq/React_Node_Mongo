const axios = require("axios");
module.exports = {
  provider: url => {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(({ data }) => resolve(data))
        .catch(err => reject(err));
    });
  },
  awaitWay: async url => {
    const res = await axios.get(url);
    return res.data;
  }
};
