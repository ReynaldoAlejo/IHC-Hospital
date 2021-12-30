const express = require("express");

const bodyparser = require("body-parser");

const moongose = require("mongoose");

const port = process.env.PORT || 4201;

//Routes
const user_routes = require('./routes/user');
const paciente_routes = require('./routes/paciente');
const especialidad_routes = require('./routes/especialidad');
const cama_routes = require('./routes/cama');
const doctor_routes = require('./routes/doctor');
//const pedido_routes = require('./routes/pedido');
const categoria_routes = require('./routes/categoria');
const cita_routes = require('./routes/cita'); 
//const entrega_routes = require('./routes/entrega');

const app = express();



moongose.connect(
  "mongodb://localhost:27017/clinicaCarrionIHC",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("Corriendo Servidor CLINICA-CARRION");
      app.listen(port, function () {
        console.log("Servidor conectado en " + port);
      });
    }
  }
);    

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
//agregué :
app.use(express.json());

app.use((req,res,next)=>{
  res.header('Content-Type: application/json');
  res.header('Access-Control-Allow-Origin','*'); 
  res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
  res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
  next();
}); 

app.use('/api',user_routes);
app.use('/api',paciente_routes);
app.use('/api',especialidad_routes);
app.use('/api',cama_routes);
app.use('/api',doctor_routes);
//app.use('/api',producto_routes);
//app.use('/api',pedido_routes);
app.use('/api',categoria_routes);
app.use('/api',cita_routes); 
//app.use('/api',entrega_routes);
module.exports = app;