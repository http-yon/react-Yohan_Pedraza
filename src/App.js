import './App.css';

function App() {

  const data = []

  const inyectarData = () => {
    const elemt = document.querySelector('#tarea').value
    data.push(elemt)
  }

const mostrarData = () => {
  const lista = document.querySelector("#lista")
  lista.innerHTML="<p>lista:<p>"
  data.forEach(ele=>{
    return lista.innerHTML +=`
    <div>${ele}</div>
    `
  })
};


  return (
    <div>
      <div>
        <input type='text' id='tarea' />
        <button onClick={() => { 
          inyectarData()
          mostrarData()}}>enviar</button>
      </div>
      <div id='lista'>
      </div>
    </div>
  )
}

export default App;
