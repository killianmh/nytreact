const axios = require("axios");
const db = require("../models");
const router = require("express").Router();

router.get("/nytarticles", (req, res) =>{
    console.log(req.query)
    axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931/",
        {params: req.query})
    .then(({data : {results}}) =>res.json(results))
    .catch(err => res.status(422).json(err));
})

router.get("/fetchDBArticles", (req, res) => {
    db.Article
    .find({})
    .then(articles => res.json(articles))
    .catch(err => res.status(422).json(err));
})

module.exports = router;