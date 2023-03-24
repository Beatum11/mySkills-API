const express = require('express');
const Article = require('../models/article');
const bodyParser = require("body-parser");

const router = express.Router();
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());


router.get('/', (req, res) => {
    res.send("Router is working");
});
//----------------------------------------------
router.get('/skills', async(req, res) => {
    const result = await Article.find();
    res.json({
        "skills": result
    });
});
//----------------------------------------------
router.get('/skills/:id', async(req, res) => {

    const articleId = req.params.id;
    const result = await Article.findById(articleId);

    res.json({
        "skill": result
    });
});
//----------------------------------------------
router.post('/skills', async(req, res) => {
    const article = new Article({
        "title": req.body.title,
        "post": req.body.post
    });

    try{
        await article.save();
        res.send("Added!");
    } catch(e){
        res.statusCode(400);
    }
});
//----------------------------------------------
router.put('/skills/:id', async(req, res) => {
    const articleId = req.params.id;

    try{
        await Article.replaceOne({
            _id: articleId
        }, {
            "title": req.body.title,
            "post": req.body.post
        });

        res.send("Updated!");
    } catch(e){
        res.sendStatus(400);
    }
});
//----------------------------------------------------
router.delete('/skills/:id', async (req, res) => {

    const articleId = req.params.id;

    try{
        await Article.deleteOne({
            _id: articleId
        });
        res.send("Deleted");
    } catch(e){
        res.sendStatus(400);
    }
});

router.patch('/skills/:id', async(req, res) => {

    const articleId = req.params.id;

    try{
        await Article.findOneAndUpdate({
            _id: articleId
        },{
            "title": req.body.title
        });
        res.send("Done");
    } catch(e){
        res.statusCode(400);
    }
});








module.exports = router;