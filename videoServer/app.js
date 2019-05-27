const express = require("express");
const _ = require("lodash");
const path = require("path");
const videoFeed = require("./data");

const app = express();
const port = 8082;

app.use(express.static(path.join(__dirname, "build")));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/data/:source*?", (req, res) => {
  console.log("get data", JSON.stringify(req.params));
  let finalData = videoFeed.videoFeed;
  if (_.isString(req.params.source)) {
    finalData = _.filter(videoFeed.videoFeed, { source: req.params.source });
  }
  res.send(finalData);
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
