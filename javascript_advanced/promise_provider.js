const axios = require("axios");
var Q = require("q");
module.exports = {
  provider: url => {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(({ data }) => resolve(data))
        .catch(err => reject(err));
    });
  },
  qprovider: url => {
    var d = Q.defer();
    axios.get(url).then(({ data }) => d.resolve(data));
    return d.promise;
  },
  awaitWay: async url => {
    const res = await axios.get(url);
    return res.data;
  }
};
