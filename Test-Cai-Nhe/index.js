const express = require('express');
const app = express();
const port = 1006;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));

app.post('/SignUp', function (req, res) {
    res.send("Conflig đê " + req.body.fullname);
});

app.listen(port, function () {
    console.log("Listening on port " + port);
});