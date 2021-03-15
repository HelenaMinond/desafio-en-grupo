// Vamos a generar una tabla con bootstrap que recoja los datos de un formulario.
// Debe haber un botón que al momento de hacer click limpie el formulario, guarde los datos y los imprima en una nueva fila de la tabla.
// Todo esto debe ser dinámico, por lo tanto, no se debe recargar la página.
// Consideraciones:
// - Debe usar POO.
// - Debe construir una clase que contenga los datos.
// - Debe encapsular sus datos para protegerlos.
// - Debe generar getters y setters para lo anterior.
// Datos: Nombre, Apellido, Edad, RUT, Email.

//Variables
const enviar = document.getElementById('enviar');
const formulario = document.getElementById('formulario');
let name = document.getElementById('name');
let lastName = document.getElementById('lastName');


//Clase
class Persona{
  constructor(nombre, apellido, edad, email, rut){
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    this._email = email;
    this._rut = rut;
  }

  get nombre(){
    return this._nombre;
  }

  set nombre(nombre){
    this._nombre = nombre;
  }

  get apellido(){
    return this._apellido;
  }

  set apellido(apellido){
    this._apellido = apellido;
  }
}

let persona1 = new Persona('Helena', 'Santana', 28, 'hs@mail.cl', '18294312-6');
//console.log(persona1.nombre);


//Función al pinchar botón
enviar.addEventListener('click', function(){
  //console.log('hola');
  persona1.nombre = `${name.value}`;
  persona1.apellido = `${lastName.value}`;
  //console.log(persona1.nombre);

  document.getElementById('nombre1').innerHTML = `${persona1.nombre}`;
  document.getElementById('apellido1').innerHTML = `${persona1.apellido}`;

  formulario.reset();
})
