const express = require('express');
const cors= require('cors');
const app = express();
const ctrl = require('./controller');
const {
    getHouse,
    createHouse,
    updateHouse,
    deleteHouse
} = ctrl;
app.use(express.json());
app.use(cors());
 app.get('/api/house' ,getHouse )
 app.post('/api/house' ,createHouse)
 app.put('/api/house/:id' ,updateHouse)
 app.delete('/api/house/:id' ,deleteHouse)

const server_port = 4005;
 app.listen(server_port,function(){
 console.log(`server  runnig on ${server_port}`)})
