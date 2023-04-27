const express = require('express')
const axios = require('axios');
const router  = express.Router()
// get all countries
router.get('/',async(req,res)=>{
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        res.json(response.data);
      } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
      }
})
// get country by name
router.get('/countryname/:name',async(req,res)=>{
  const name = req.params.name;
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal server error');
  }
})

// get country by region
router.get('/countryregion/:region',async(req,res)=>{
  const region = req.params.region;
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal server error');
  }
})

module.exports=router