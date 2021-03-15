// Vamos a generar una tabla con bootstrap que recoja los datos de un formulario.
// Debe haber un botón que al momento de hacer click limpie el formulario, guarde los datos y los imprima en una nueva fila de la tabla.
// Todo esto debe ser dinámico, por lo tanto, no se debe recargar la página.
// Consideraciones:
// - Debe usar POO.
// - Debe construir una clase que contenga los datos.
// - Debe encapsular sus datos para protegerlos.
// - Debe generar getters y setters para lo anterior.
// Datos: Nombre, Apellido, Edad, RUT, Email.
const nombre = document.getElementById("Nombre");
const apellido = document.getElementById("Apellido");
const edad = document.getElementById("Edad");
const email = document.getElementById("Email");
const rut = document.getElementById("Rut");
const enviar = document.getElementById("Enviar");
const tabla = document.getElementById("tabla");

class Formulario {
  #nombre = "";
  #apellido = "";
  #edad = "";
  #rut = "";
  #email = "";

  constructor(nombre, apellido, edad, rut, email) {
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#edad = edad;
    this.#rut = rut;
    this.#email = email;
  }
  // getters
  get ObtenerNombre() {
    return this.#nombre;
  }
  get ObtenerApellido() {
    return this.#apellido;
  }
  get ObtenerEdad() {
    return this.#edad;
  }
  get ObtenerRut() {
    return this.#rut;
  }
  get ObtenerEmail() {
    return this.#email;
  }

  // setters
  set ModificarNombre(valor) {
    this.#nombre = valor;
  }
  set ModificarApellido(valor) {
    this.#apellido = valor;
  }
  set ModificarEdad(valor) {
    this.#edad = valor;
  }
  set ModificarRut(valor) {
    this.#rut = valor;
  }
  set ModificarEmail(valor) {
    this.#email = valor;
  }
}

enviar.addEventListener("click", () => {
  // Normalizar los datos
  const rutNormalizado = rut.value
    .replace(".", "")
    .replace(".", "")
    .replace("-", "");

  const persona1 = new Formulario(
    nombre.value,
    apellido.value,
    edad.value,
    rutNormalizado,
    email.value
  );

  const obj = {
    nombre: persona1.ObtenerNombre,
    apellido: persona1.ObtenerApellido,
    edad: persona1.ObtenerEdad,
    rut: persona1.ObtenerRut,
    email: persona1.ObtenerEmail
  };

  tabla.innerHTML += `
  <tr id="id_${obj.rut}">
    <td>${obj.nombre}</td>
    <td>${obj.apellido}</td>
    <td>${obj.edad}</td>
    <td>${obj.rut}</td>
    <td>${obj.email}</td>
    <td><button onclick="mostrar(${obj.rut})" class="btn btn-danger">Eliminar</button></td>
  </tr>
  `;

  limpiar();
});

const limpiar = () => {
  nombre.value = "";
  apellido.value = "";
  edad.value = "";
  rut.value = "";
  email.value = "";
};

const mostrar = (id) => {
  const idFila = document.getElementById(`id_${id}`);
  idFila.innerHTML = "";
};

// CRUD
// Create
// Read
// Update
// Delete
