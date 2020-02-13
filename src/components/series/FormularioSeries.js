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
        <div className='card mt-2'>
            <div className='card-header'>Cadastro de séries</div>
                <div className='card-body'>
                    <form method='post' onSubmit={this.formHandler}>
                        <div className="form-group">
                        
                        <label className='mt-2' htmlFor='nome'>Nome:</label>
                        <input type='text' className='form-control' id='nome' name='nome' value={this.state.nome} onChange={this.inputHandler}/>
                        
                        <label  className='mt-2' htmlFor='ano_lancamento'>Ano de Lançamento:</label>
                        <input type='text' className='form-control' id='ano_lancamento' name='ano_lancamento' value={this.state.ano_lancamento} onChange={this.inputHandler}/>
                        
                        <label className='mt-2' htmlFor='temporadas'>Temporadas:</label>
                        <input type='text' className='form-control' id='temporadas' value={this.state.temporadas} name='temporadas' onChange={this.inputHandler}/>
                        
                        <label className='mt-2' htmlFor='sinopse'>Sinopse:</label>
                        <textarea type='text'  className='form-control textarea' id='sinopse' name='sinopse' onChange={this.inputHandler} value={this.state.sinopse}/>

                        <button type="submit" className='btn btn-primary form-control mt-2'>Salvar</button>
                        </div>
                    
                    </form>
                </div>

        </div>
    )
}

}


export default FormularioSeries