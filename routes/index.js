var express = require('express');
var router = express.Router();
const app = express();
const User = require('../model/User');

// index page
router.get('/', (req,res)=>{
    res.render('index')
})

router.get('/successful', (req,res)=>{
    res.render('successful')
})

/* GET users listing. */
router.post('/create-user', (req, res, next) => {

    const user = new User({ 
       surname : req.body.surname,
       firstname : req.body.firstname,
       othername : req.body.othername,
       email : req.body.email,
       dateofbirth : req.body.dateofbirth,
       nationality : req.body.nationality,
       residential : req.body.residential,
       residenttown : req.body.residenttown,
       occupation : req.body.occupation,
       local : req.body.local,
       category : req.body.category,
       workstatus : req.body.workstatus,
       date : req.body.date
 
    }).save((err,user) => {
     if(err) return console.error(err);
     console.log('User successfully created')
     res.redirect('/');
  });
 
})



module.exports = router