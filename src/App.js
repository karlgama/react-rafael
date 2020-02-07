import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {

constructor() {
  super()
  this.state = {
    lista: []
  }
}

async componentDidMount() {
  let resposta = await fetch('http://localhost:3000/series')
  const series = await resposta.json()
  console.log(series);
  this.setState({lista: series})
}



render() {
  return (
    <div className="App">
      Cadastro de séries
      <form method='post'>
        <div className="form">
          <label htmlFor='nome'>Nome:</label>
          <input type='text' id='nome' name='nome'/>
          
          <label htmlFor='ano'>Ano de Lançamento:</label>
          <input type='text' id='ano' name='ano'/>
          
          <label htmlFor='temporadas'>Temporadas:</label>
          <input type='text' id='temporadas' name='temporadas'/>
          
          <label htmlFor='sinopse'>Sinopse:</label>
          <textarea type='text' id='sinopse' name='sinopse'/>

          <button type="submit">Salvar</button>
        </div>
        
      </form>
        <div className='list'>
          <table>
            <thead>
              <tr>
                <th>Nome:</th>
                <th>Ano de Lançamento</th>
                <th>Temporadas </th>
                <th>Sinopse</th>
              </tr>
            </thead>
            
            <tbody>
              {this.state.lista.map(serie=>{
                return(
                  <tr key={serie.id}>
                    <td>{serie.nome}</td>
                    <td>{serie.ano_lancamento}</td>
                    <td></td>
                    <td></td>
                  </tr>
                )
              })}
              <tr>
               
              </tr>
            </tbody>
          </table>
        </div>
    </div>
    );
  }
  }


export default App;
