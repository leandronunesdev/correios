import React, { useState } from 'react';
import axios from 'axios'
import './App.css';
import { Endereco } from './types/endereco';

function App() {

  const [cep, setCep] = useState<String>("")

  const[endereco, setEndereco] = useState<Endereco>()

  const getCep = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resposta => setEndereco(resposta.data))
  }

  console.log('endereco', endereco)

  return (
    <div className="App">
      <input type="text" onChange={(event) => setCep(event.target.value)}/>
      <button onClick={getCep}>Ver CEP</button>
      <h1>Endereço</h1>
      {
        <p>O CEP {endereco?.cep} corresponde à rua {endereco?.logradouro}, no bairro {endereco?.bairro}, na cidade de {endereco?.localidade}, {endereco?.uf}</p>
      }
    </div>
  );
}

export default App;
