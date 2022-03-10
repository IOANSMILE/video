const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const port = 5000

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' })
)
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))
app.get('/', (req,res) => {
    res.render('home')
})
app.get('/about', (req,res) => {
    const random = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('about', {fortune:random})
})
app.use((req,res)=>{

    res.status(404)
})
let fortunes = [
    'Первое',
    'Второе',
    'Третье',
    'Четыре',
    'Пять',
    'Шесть'
]



app.listen(port, () => {
    console.log(`Сервер запущен на порте: ${port}`)
})



