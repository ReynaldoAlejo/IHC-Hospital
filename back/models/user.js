const {Schema,model}= require('mongoose');

const UserSchema = Schema({
    nombres : String,
    apellidos : String,
    email : String,
    password : String,
    dni : String,
    telefono : String,
    role : String,

});

module.exports=model('user',UserSchema);