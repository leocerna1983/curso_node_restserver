const {response} = require('express');
const { param } = require('../routes/usuarios');

const usuariosGet = (req, res=response) => {
    const params = req.query;
    console.log(params);
    res.status(403).json({
        msg:'Es una petición Get Api - Controlador'
    })
  }

  const usuariosPost =  (req, res= response) => {
    const {name, age} = req.body;
    res.status(201).json({
        msg:'Es una petición Post - Controllers',
        name, 
        age
    })
  }

  const usuariosDelete =  (req, res= response) => {
    res.status(403).json({
        msg:'Es una petición Delete - Controllers'
    })
  }

  const usuariosPut =  (req, res= response) => {
    const id = req.params.id;
    res.status(403).json({
        msg:'Es una petición Put - Controllers',
        id
    })
  }


  module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPut
  }