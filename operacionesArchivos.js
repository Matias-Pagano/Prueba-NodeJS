//requiero el modulo nativo para manejar operaciones de archivos

const fs = require('fs');

//Defino un objeto literal con sus propiedades y funciones

let operacionesArchivos = 
{
    archivo : 'tareas.json',

leerArchivoJson: function () {
//to do
return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));

},

grabarUnJson : function(tareas){
    //to do
return fs.writeFileSync(this.archivo, tareas)
},

}
//Hacemos publica la variable para que este modulo lo podamos 

module.exports = operacionesArchivos; 
