const express = require('express')
const app = express()

app.use(express.static('./public'))
app.use(express.urlencoded({extended: true}))

let middle = express.urlencoded({extended: true})

//return value of express.urlencoded() === middleware callback function
console.log(middle.toString())

app.post('/shows', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})

//change the form's `method` property to "get" to see the same result with query params
app.get('/shows', (req, res) => {
  console.log(req.query)
  res.json(req.query)
})

app.get('/:some/:data', (req, res) => {
  //-------------------Path-----||-------req.params object-------
  req.params // => /value/other == {some: "value", data: "other"} 
})

app.listen(5000)