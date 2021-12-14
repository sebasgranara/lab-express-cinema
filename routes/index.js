const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies',(req,res,next)=>{
    Movie.find({},{title:1,image:1}).then(
        (movies)=>{
            console.log(movies);
            res.render('movies',{movies:movies});
        }
    )
})

router.get('/movie/:id',(req,res,next)=>{
    const movieId=req.params.id;
    Movie.findById(movieId).then(
        (movie)=>{
            res.render('movie_details',{
                movie:movie
            })
        }
    )
})
module.exports = router;
