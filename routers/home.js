const router = require("express").Router();


router.get('/', (req,res)=> {
    res.render('home');
});
router.get('/checkout',(req,res)=>{
    res.render('checkout');
})
router.get("/success", (req,res)=>{
    res.render('done');
})
module.exports = router;