const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const Router = require('express')

const rot = new Router

rot.get('/', async (req, res) => {
  res.render('index', {
    title: 'Авторизация',
    isIndex: true,
  })
})

const { response } = require('express')
const PORT = 5000

const urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))


const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')



app.listen(PORT, () => { console.log(PORT)});
