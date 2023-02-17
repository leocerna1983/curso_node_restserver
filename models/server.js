const express = require('express');
const cors =  require('cors');
class Server {    
    constructor(){
        this.app = express();
        var path = require('path');
        this.PORT =process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';
        this.middlewares();
        this.routes();
    }

    middlewares(){
        console.log('middlewares');
        //directorio publico
        //this.app.use(express.static('public'));
        this.app.use(express.static(__dirname+ '/public'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.PORT, ()=>{
            console.log('Servidor corriendo en puerto: '+this.PORT);
        })
    }
}

module.exports = Server;