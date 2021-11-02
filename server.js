const express = require('express')
const app = express()

app.use(express.static('./public'))
app.use(express.urlencoded({extended: true}))

let middle = express.urlencoded({extended: true})

console.log(middle.toString())

app.post('/shows', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})

app.get('/:some/:data', (req, res) => {
  //-------------------Path-----||-------req.params obj----------
  req.params // => /value/other == {some: "value", data: "other"} 
})

app.listen(5000)