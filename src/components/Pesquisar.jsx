import axios from 'axios'
import { useState } from 'react'
import { BsFillCloudSunFill } from 'react-icons/bs'
const Pesquisar = () => {

    const [dado, setDado] = useState({
        name: '',
        main: '',
        temp_min: '',
        temp_max: '',
        humidity: '',
        temp: '',
        wind: '',
        clouds: '',
        all: '',
        speed: ''
    })
    const [localizacao, setLocalizacao] = useState('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&lang=pt_br&appid=7083ac30a562875979b4b58788ded193&units=metric`


    const buscarLocal = async (event) => {
        if (event.key === 'Enter') {
            const teste = await axios.get(url)
            //console.log(teste.data.name)
            setDado(teste.data)
            setLocalizacao('')
        }
    }

    return (
        <div className="Container">
        <div className="Buscar" >
            <input value={localizacao}
                onChange={event => setLocalizacao(event.target.value)}
                onKeyPress={buscarLocal}
                placeholder='Digite a localização'
                type="text" />
            <div className="Cidade">
                <h1>{dado.name}</h1><p>{dado.main.temp} °C</p>
                </div>
                <div className="Temperaturas">
                <BsFillCloudSunFill id='iconeNu'/><p>Temperatura min: {dado.main.temp_min} °C </p>
                <p>Temperatura max: {dado.main.temp_max} °C</p>
                <p>Umidade: {dado.main.humidity} %</p>
               <p>Vento: {dado.wind.speed} m/s</p>
            </div>
            </div>
        </div>

    )
}

export default Pesquisar
