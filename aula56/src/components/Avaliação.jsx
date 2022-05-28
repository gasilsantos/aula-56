import React from "react";

export default class Avaliação extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            tema:"",
            questoes:0,
            tempoTotal:0,
            nota: 0,
        }

        this.atualizar = this.atualizar.bind(this)
    }

    atualizar(){
        this.setState({
            tema:this.props.tema,
            qustoes: this.props.questoes,
            tempoTotal: this.props.tempoTotal,
            peso: this.props.peso
        })
    }

    render(){
        return(
            <div>
                <h4>tema: {this.state.tema}</h4>
                <h4>Numero de questoes: {this.state.qustoes}</h4>
                <h4>tempo total da avaliação: {this.state.tempoTotal}</h4>
                <h4>peso na média final: {this.state.peso}</h4>

                <button onClick={this.atualizar}>atualizar</button>

                
            </div>
        )
    }
}