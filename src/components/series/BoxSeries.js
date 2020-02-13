import React, { Component } from 'react';
import FormularioSeries from './FormularioSeries'
import TabelaSeries from './TabelaSeries'



class BoxSeries extends Component {

    constructor() {
        super()
        this.state = {
          series: []
        }
      }
      
    async componentDidMount() {
        let resposta = await fetch('http://localhost:3000/series')
        const series = await resposta.json()
        this.setState({series: series})
    }

    sendData = async (serie) => {
        const params = {
            method: 'POST',
            headers:{
                Accept:'aplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serie)
        }
        console.log('enviando dados...')
        // console.log(serie)
        try{
            const retorno = await fetch('http://localhost:3000/series', params)
            if(retorno.status === 201){
                console.log('enviado com sucesso')
                serie = await retorno.json()
                this.setState({series:[...this.state.series, serie]})
                console.log(serie)
            }
        }catch(erro){
            console.log(erro)
        }

    }
      
    render(){
        return(
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-4'>
                        <FormularioSeries sendData={this.sendData}/>
                    </div>

                    <div className='col-md-8'>
                        <TabelaSeries series={this.state.series}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BoxSeries;