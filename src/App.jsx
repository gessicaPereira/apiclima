import React, {useState} from 'react'
import axios from 'axios'
import './App.css'
import Home from './components/Home'
import Localização from './components/Localizacao'
import Descrição from './components/Descricao'

function App() {

const [data, setData] = useState({})
const [localização, setLocalização] = useState('')

const url='https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=7083ac30a562875979b4b58788ded193'

const buscarLocalização = (event) => {
  if(event.key === 'Enter'){
    axios.get(url).then((Response) =>{
      setData(Response.data)
      console.log(Response.data)
    }
    )
  }

}

  return (
    <div className="App">
      <Home></Home>
      <div className='Buscar'>
      <input value={localização}
            onChange={event=> setLocalização(event.target.value)}
            onKeyPress={buscarLocalização}
            placeholder='Digite a localização'
            type="text" />
      </div>
      <div className='location'>
        <p>{data.name}</p>
      </div>
      <div className='temperatura'>
        {data.main ? <h1>{data.main.temp}</h1> : null}
      </div>
      <Localização></Localização>
      <Descrição></Descrição>
    </div>
  )
}

export default App
