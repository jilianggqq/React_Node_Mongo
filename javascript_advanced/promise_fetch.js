const fetch = require("node-fetch");
// write a function to retrieve a blob of josn.
// make an ajax request.
// https://rallycoding.herokuapp.com/api/music_albums

// 1. traditional way.
function fetchAlbums() {
  fetch("https://rallycoding.herokuapp.com/api/music_albums")
    // .then(res => res.json())
    .then(function(res) {
      console.log("type of first res:", toString.call(res));
      console.log("first res is:", res);
      return res.json();
    })
    .then(function(res) {
      console.log("type of second res:", toString.call(res));
      console.log("second res is:", res);
    });
}

fetchAlbums();

// 2. ES2015.
async function fetchAlbums2() {
  const res = await fetch("https://rallycoding.herokuapp.com/api/music_albums");
  const json = await res.json();
  console.log(json);
}

// fetchAlbums2();
