const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const fortune = require('./lib/fortune.js')
const port = 5000

app.engine('.hbs', handlebars.engine({
    defaultLayout: 'main',
    extname:'.hbs'}))
app.set('view engine', '.hbs')
app.use(express.static(__dirname + '/public'))
app.get('/', (req,res) => {
    res.render('home')
})
app.get('/about', (req,res) => {
    res.render('about', {fortune: fortune.getFortune()})
})
app.get('/pipi', (req,res) => {

    res.render('pipi', {fortune:fortune.getFortune()})
})
app.use((req,res)=>{
    res.status(404)
})

app.listen(port, () => {
    console.log(`Сервер запущен на порте: ${port}`)
})



