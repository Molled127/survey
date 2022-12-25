const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Holla coma estos')
})

const PORT = process.env.PORT || 4000

app.listen(4000, () => {
  console.log('Listening on 4000')
})
