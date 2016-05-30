var express = require("express");

var app = express();

app.use(express.static("build"));

app.get('/valve', function (req, res)
{
    res.send(JSON.stringify({ closeAt: Date.now() }));
});

app.listen(3001, function ()
{
    console.log("Express app listening at 3001");
});