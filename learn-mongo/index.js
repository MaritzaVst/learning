const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

//add middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/product', (req, res) => {
    res.status(200).send({ products: [] })
})

app.get('api/product/:productId', (req, res) => {

})

app.post('/api/product', (req, res) => {
    console.log(req.body)
    res.status(200).send( {message: "El producto se ha recibido"} )
})

app.put('/api/product/:productId', (req, res)  => {

})

app.delete('api/product/:productId', (req, res) => {

})

app.listen(port, () => { 
    console.log(`Runinng in port ${port}`)
}) 