const express = require('express')
const path = require('path')

const app = express()
const port = 3000



// view engine
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src/views'))

// static file
app.use(express.static(path.join(__dirname, 'src/public')))

// route
app.get('/', (req, res) => {
  res.render('home', {
    name: 'Alisa',
    role: 'student',
    location: 'Koja, jakarta utara, Indonesia',
    available: true
  })
})

app.listen(3000, () => {
  console.log('Server jalan di port 3000')
})
