import React from "react";

export default class Relogio extends React.Component {


    constructor() {
        super()
        this.state = {
            hora: new Date()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.ticktack(), 1000);

    }

    ticktack() {
        this.setState({ hora: new Date() })
    }

    render() {
        return (
            <div className="">
                <h2>
                 hora atual {this.state.hora.toLocaleTimeString()}
                </h2>
                <h2>
                 data {this.state.hora.toLocaleDateString()}
                </h2>
            </div>



        )
    }

}