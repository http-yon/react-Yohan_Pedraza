import './App.css';

function App() {

  let data = []
 

  const inyectarData = () => {
    const elemt = document.querySelector('#tarea').value

    if (elemt === "") {
      alert("no se puede meter valores vacios");
    } else {
      data.push(elemt)
      alert("datos ingresados");
    }
  }

  const mostrarData = () => {
    const lista = document.querySelector("#lista")
    lista.innerHTML = "<h2>lista:<h2>"

    data.forEach((element, index) => {

      const div = document.createElement("div")
      const button = document.createElement("button")
      button.innerHTML = "Borrar"

      const buttonUpdate = document.createElement("button")
      buttonUpdate.innerHTML = "Update"

      button.addEventListener("click", () => {
        borrarElemento(index)
      })


      buttonUpdate.addEventListener("click", () => {
        updateData(index)
      })

      div.innerHTML = `
        <li>${element}</li>
      `

      div.appendChild(button)
      div.appendChild(buttonUpdate)
      lista.appendChild(div);
    });
  };


  const borrarElemento = (index) => {
    data.splice(index, 1)
    alert("datos borrados correctamente")
    mostrarData()
  }


  const updateData = (index) => {
    const lista = document.querySelector("#edit")

    const botonUpd = document.createElement("button")
    botonUpd.innerHTML = "editar"

    const parrafo = document.createElement("p")
    parrafo.innerHTML = "ingrese el dato para editar"


    const input = document.createElement("input")
    input.placeholder = "texto a editar"
    input.value = data[index]

    botonUpd.addEventListener("click", () => {

      if (input.value === "") {
        alert("no se puede ingresar un dato vacio");
      } else {
        data[index] = input.value
        lista.innerHTML = ""
        alert("dato editado correctamente")
        mostrarData()
      }
    })

    lista.appendChild(parrafo)
    lista.appendChild(input)
    lista.appendChild(botonUpd)

  }


  const borrarAllData = () => {
    const lista = document.querySelector("#lista")
    data = []
    lista.innerHTML = ""
    alert("todos los datos borrados correctamente")
  }


  return (
    <div className='main'>
      <h1> INTENTO DE USO DE REACT (SI ES QUE LO USÉ xd)</h1>
      <h3> HECHO POR : Yohan Pedraza</h3>
      <div className='main2'>
        <input type='text' placeholder='ingrese texto a la lista' id='tarea' />

        <button onClick={() => {
          inyectarData()
          mostrarData()
        }}>enviar</button>

        <button onClick={() => {
          borrarAllData()
        }}> Borrar todo</button>
      </div>

      <div id='lista'>
      </div>

      <div id="edit">
      </div>
    </div>
  )
}


export default App;