'use strict'

//Declaración de dependencias
const express = require('express')
const router = express.Router()
const path = require('path')

//Rutas
router.get('/', (req,res)=>{
    res.render('Demos',{title:'Demos públicos'})
})

router.get('/:demo', (req,res)=>{
    res.render('demos',{title : `${req.params.demo}`})
})

router.get('/:otro',(req,res)=>{
    res.status(404).send({mensaje:`oops! Recurso \'${req.params.otro}\' No encontrado`})
})


module.exports = router
