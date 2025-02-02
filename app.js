// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaración del array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombre = inputAmigo.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre); // Agregar el nombre al array
  inputAmigo.value = ""; // Limpiar el campo de texto

  actualizarListaAmigos(); // Actualizar la lista visual
}

// Función para actualizar la lista visual de amigos en la página
function actualizarListaAmigos() {
  // 1. Obtener el elemento de la lista
  const listaAmigos = document.getElementById("listaAmigos"); // Selecciona el <ul> con id "listaAmigos"

  // 2. Limpiar la lista existente
  listaAmigos.innerHTML = ""; // Elimina todos los elementos <li> existentes

  // 3. Iterar sobre el arreglo "amigos"
  for (let i = 0; i < amigos.length; i++) {
    const nombre = amigos[i]; // Obtener el nombre actual del array

    // 4. Crear un nuevo elemento de lista (<li>)
    const li = document.createElement("li"); // Crear un elemento <li>
    li.textContent = nombre; // Asignar el nombre como contenido del <li>

    // 5. Agregar el elemento <li> a la lista <ul>
    listaAmigos.appendChild(li); // Agregar el <li> a la lista <ul>
  }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  // 1. Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear."); // Mostrar mensaje de error
    return; // Detener la ejecución si no hay nombres
  }

  // 2. Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // 3. Obtener el nombre sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // 4. Mostrar el resultado
  const resultado = document.getElementById("resultado"); // Obtener el elemento de resultado
  resultado.innerHTML = `¡El amigo secreto es: <strong>${amigoSorteado}</strong>!`; // Mostrar el resultado

    // Limpiar la lista de nombres y el array
    amigos = []; // Vaciar el array
    actualizarListaAmigos(); // Actualizar la lista visual (quedará vacía)
}
