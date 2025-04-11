console.log("prueba del script desde el archivo jss");

localStorage.setItem("nombre", "Juan");
localStorage.setItem("Auto", "Camionteta 4x4");

const titulo = document.getElementById("ValorDelLocalStorage");
titulo.innerHTML = localStorage.getItem("nombre");

const botonBorrar = document.getElementById("botonBorrar");
botonBorrar.addEventListener("click", () => {
  localStorage.removeItem("nombre");
  titulo.innerHTML = "Eliminado";
});

const botonBorrartodo = document.getElementById("botonBorrarTodo");
botonBorrartodo.addEventListener("click", () => {
  localStorage.clear();
  titulo.innerHTML = "Eliminado Todo";
});