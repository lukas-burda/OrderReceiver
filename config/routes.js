const express = require('express')
const routes = express.Router()

module.exports = routes

let runtimeDatabase = [
    {Id:"1",Status: "Waiting-to-be-choosed", SubTotalAmount:"3990", Items:[{Name:"Prensado", Amount:"3990", Quantity:"1"}]}
]

routes.get('/orders/all',(req, res) => {
    if(runtimeDatabase.length==0){
        return res.status(204).end()
    }
    else {
        return res.json(runtimeDatabase)
    }
})

routes.post('/orders/', (req, res) => {
    const body = req.body
    if(!body){
        return res.status(400).end()
    } else {
        runtimeDatabase.push(body)
        return res.status(201).end()
    }
})

routes.get('/orders/:id', (req, res)=>{
    const id = req.params.id
    return res.json(runtimeDatabase.find(x => x.Id == id))
})
 