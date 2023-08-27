const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const envelopes = []
let nextEnvelopeId = 0;


app.get('/', (req,res,next)=>{
    res.send("Hello")
})

app.get('/envelopes', (req,res,next) => {
    res.status(200).send(envelopes)
})

app.get('/envelopes/:id', (req,res,next) =>{
    const id = req.params.id

    if(id < envelopes.length) {
        const result = envelopes.filter((word) => word.id === parseInt(id))
        res.status(200).send(result)
    } else {
        res.status(400).json({message: "invalid id entered"})
    }
})


app.post('/envelopes', (req,res,next) => {
    const {title,budget} = req.body;

    if(title && budget) {
        const envelope = {
            id:nextEnvelopeId,
            title: title,
            budget: budget
        }

        envelopes.push(envelope)
        nextEnvelopeId++;

        res.status(201).json({message: "An envelope was added to the server"})
    } else {
        res.status(400).json({message:"Check the validity of the input"})
    }
})


app.listen(3000, ()=> {
    console.log("Listening on port 3000")
})