import React from "react";

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.modelo = "golf gti"
        this.state = {
            ligado: false,
            explodiu: false,
            velocidade: 0
        }
    }

    ligadesliga(){
        this.setState({ligado:!this.state.ligado})

        if(this.state.ligado===false){
            this.setState({velocidade:0})
        }
    }

    acelerar(){
        let velo = this.state.velocidade + 10
        this.setState({velocidade:velo})

        this.State.velocidade = velo
        console.log("velocidade",velo)

        if (this.velocidade > 190){
            this.setState({explodiu:true})
        }
    }

    frear(){
        let velo = this.state.velocidade - 10
        this.setState({velocidade:velo})
    }

    para(){
        this.setState({velocidade:0})

    }

    render() {
        return (
            <div>
                <h3>carro bomba: {this.modelo}</h3>
                <h3>ligado:{this.state.ligado ? "sim": "não"}</h3>
                <h3>explodiu:{this.state.explodiu? "booomm":"não"}</h3>
                <h3>velocidade: {this.state.velocidade}</h3>

                <button onClick={()=>this.acelerar()}>acelerar</button>
                <button onClick={()=>this.acelerar()}>frear</button>
                <button onClick={()=>this.acelerar()}>parar</button>


            </div>
        )
    }

}

