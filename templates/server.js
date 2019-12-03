const express = require("express");
const app = express();

app.use(express.static("js-module"));

app.listen(8000, () => {
    console.log(`Express server serving ${process.argv[2]} on port ${8000}`)
});
