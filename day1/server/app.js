
const models = require('./models')
const express = require('express')
const app = express()
const {Op} = require('sequelize')
const cors = require('cors')

app.use(cors())
app.use(express.json()) // body parser




app.get('/api/books', (req, res) => {
    
    models.Book.findAll().then(books => {
        res.json(books)
    })
})

app.get('/api/books/:bookId', (req, res) => {

    const bookId = req.params.bookId
    
    models.Book.findOne({
        where: {
            id: bookId 
        }
    })
    .then(book => {
        res.json(book)
    })
})

app.post('/api/books', (req, res) => {
    
    const title = req.body.title
    const author = req.body.author
    const year = req.body.year
    const review = req.body.review
    const coverUrl = req.body.coverUrl
    
    let book = models.Book.build({
            title: title,
            author: author,
            year: year,
            review: review,
            coverUrl: coverUrl
        })
        
        book.save()

        res.json({success: true})
}) 

app.delete('/api/books/:bookId', (req, res) => {
    
    const bookId = req.params.bookId
    
    models.Book.destroy({
        where: {
            id: bookId
            }
        })

        res.json({success: true})
})


app.listen(8080, () => {
    console.log('Server is running...')
})