//Requerir los modulos necesarios

let funcionalidadesTareas = require('./funcionalidadTareas');

let accion = process.argv[2];
let tituloTerminal = process.argv[3];
let estadoTerminal = process.argv[4];
let filtroEstado = process.argv[3];

//Nativos, propios o de terceros

//Declarar todas las variables necesarias

//let accion = '';

switch (accion) {
    case 'listar':

    funcionalidadesTareas.listar()
        //Llamamos a la funcionalidad Listar
        break;

    case 'crear':
        //Llamamos a la funcionalidad crear
        funcionalidadesTareas.crear();
        funcionalidadesTareas(tituloTerminal, estadoTerminal);
        break;

    case 'filtrar':
        //Llamamos a la funcionalidad filtrar
        funcionalidadesTareas.filtrar(filtroEstado);
        break;

    case undefined:
        console.log('Tenes que pasar una accion');
        break;
         
    default:
        console.log()

        break;
}