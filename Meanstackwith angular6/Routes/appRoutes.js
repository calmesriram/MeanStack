var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var Country = require('../models/dataSchema');
// var MongoClient = require('./dbconfig');
var axios = require('axios');

router.get('/',(req,res)=>{
    res.status(200).json({message:"Connected! Plz navigate your path"});
});

router.post('/create',(req,res) =>{
    var newCountry = new Country(req.body);

    newCountry.save((err,country)=>{
        if(err)
        res.status(500).json({errmsg:err});
        res.status(200).json({msg:country});
    });
    
});

router.get('/read',(req,res)=>{
// res.status(200).json({message:"get request is Working"});
Country.find({},(err,countries)=>{
    if(err)
    res.status(500).json({errmsg:err});
    res.status(200).json({msg:countries});
});

});


router.put('/update',(req,res)=>{
    // res.status(200).json({message:"Put request is Working"});
    Country.findById(req.body._id,(err,country)=>{
        if(err)
        res.status(500).json({errmsg:err});
        // res.status(200).json({msg:country});
        country.name = req.body.name;
        country.capital = req.body.capital;
        country.save((err,country)=>{
            
            if(err)
            res.status(500).json({errmsg:err});
            res.status(200).json({msg:country});

        });
        
    });
    });


router.delete('/delete/:id',(req,res)=>{
    // res.status(200).json({message:"delete request is Working"});
    Country.findOneAndRemove({_id:req.params._id},(err,country)=>{

        if(err)
        res.status(500).json({errmsg:err});
        res.status(200).json({msg:country});

    })
    });

    module.exports = router;