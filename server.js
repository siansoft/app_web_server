const express = require('express')
var app = express()

app.get('/about', (req, res) => {
//   res.send('<h1>Hello world</h1>')
//   res.send({
//       name: 'Ali',
//       like: [
//           'g',
//           'b'
//       ]
//   })
res.send('<h1>About Page</h1>')
})
app.listen(3000)
