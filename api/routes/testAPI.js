var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("this result is from the Express API");
});

module.exports = router;
