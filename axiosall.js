var axios=require("axios");
// const { error } = require("console");
axios.get('https://api.github.com/users/mapbox')
  .then((response) => {
    // console.log(response.data);
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    console.log(response.config);
  }).catch((error)=>{
      console.log(error);
  })

  
// logs:
// => {login: "mapbox", id: 600935, node_id: "MDEyOk9yZ2FuaXphdGlvbjYwMDkzNQ==", avatar_url: "https://avatars1.githubusercontent.com/u/600935?v=4", gravatar_id: "", …}
// => 200
// => OK
// => {x-ratelimit-limit: "60", x-github-media-type: "github.v3", x-ratelimit-remaining: "60", last-modified: "Wed, 01 Aug 2018 02:50:03 GMT", etag: "W/"3062389570cc468e0b474db27046e8c9"", …}
// => {adapter: ƒ, transformRequest: {…}, transformResponse: {…}, timeout: 0, xsrfCookieName: "XSRF-TOKEN", …}
