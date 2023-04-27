const express = require('express')

const countryRoutes = require('./routes/Countries')
require('dotenv').config()
// express app
const app = express()


app.use(express.json())
// listen for request 

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(req.path,req.method)
    next()
})

// routes
app.use('/api/countries',countryRoutes)

app.listen(process.env.PORT,()=>{
    console.log('listening on port 4000')
})

