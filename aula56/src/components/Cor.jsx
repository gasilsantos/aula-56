import { useState } from "react";

function Cor (props){
    const[cor, setCor] = useState("vermelho")

    return(
        <div>
            <h2>
                minha cor favorita é: {cor}
            </h2>
            <button onClick={()=>setCor(props.cor)}>alterar cor</button>
        </div>
    );
}

export default Cor