const express = require('express');


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.routes();
    }

     routes() {
        this.app.get('/', () => {
            console.log('Hello world');
        })
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Server listening in teh port', this.port)
        })
    }

}

module.exports = Server;
