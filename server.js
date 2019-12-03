const express = require('express')
const hbs = require('hbs')
var app = express()
hbs.registerPartials(__dirname + 'views/partials')
app.set('view engine', 'hbs')
app.use(express.static(__dirname +'/public'))

app.get('/', (req, res) => {
    //res.send('<h1>Hello world</h1>')
    res.render('home.hbs', {
        pagetitle: 'Home Page',
        welcomemessage: 'Welcome to my web site',
        currentYear: new Date().getFullYear()
    })
})

app.get('/json', (req, res) => {
  res.send({
      name: 'Ali',
      like: [
          'g',
          'b'
      ]
  })
})

app.get('/about', (req, res) => {
// res.send('<h1>Hi This is About Page</h1>')
res.render('about.hbs', {
    pagetitle: 'About Page',
    currentYear: new Date().getFullYear()
})

})
app.get('/bad', (req, res) => {
    res.send({
            errorMessage: 'Unable to handle request'
        })
    })
app.listen(3000, () => {
    console.log('Server is runing up on port 3000')
})
