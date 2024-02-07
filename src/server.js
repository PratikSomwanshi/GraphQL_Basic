const express = require("express");
const init = require("./config/graphql.server");

const app = express();

init(app);

app.listen(8000, () => {
    console.log("server running on port 8000");
});
