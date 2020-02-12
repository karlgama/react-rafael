import React, { Component } from 'react';



class FormularioSeries extends Component {

    constructor() {
        super()
        this.stateInicial = {
            nome: '',
            ano_lancamento: '',
            temporadas: '',
            sinopse: ''
          }

          this.state = this.stateInicial
    }

    inputHandler = (e) => {
        const { name, value } = e.target
      
        this.setState({[name]: value})
        // console.log(this.state.name)
      }
      
      formHandler = (e) => {
        // console.log(this.state.nome)
        e.preventDefault()
        this.props.sendData(this.state)
        this.setState(this.stateInicial)
       
      }

render(){
    return(
        <div>
            <form method='post' onSubmit={this.formHandler}>
                <div className="form">
                
                <label htmlFor='nome'>Nome:</label>
                <input type='text' id='nome' name='nome' value={this.state.nome} onChange={this.inputHandler}/>
                
                <label htmlFor='ano_lancamento'>Ano de Lançamento:</label>
                <input type='text' id='ano_lancamento' name='ano_lancamento' value={this.state.ano_lancamento} onChange={this.inputHandler}/>
                
                <label htmlFor='temporadas'>Temporadas:</label>
                <input type='text' id='temporadas' value={this.state.temporadas} name='temporadas' onChange={this.inputHandler}/>
                
                <label htmlFor='sinopse'>Sinopse:</label>
                <textarea type='text' id='sinopse' name='sinopse' onChange={this.inputHandler} value={this.state.sinopse}/>

                <button type="submit">Salvar</button>
                </div>
            
            </form>
        </div>
    )
}

}


export default FormularioSeries