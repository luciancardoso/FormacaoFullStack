import React, { useState, useEffect } from "react";
import Template from "./Template";

import './Counter.css';

const Counter = () => {

    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log('renderizou')
    }, []);

    const handleOnClick = operador => {
        const novoValor = operador === '+'
            ? contador + 1
            : contador - 1

        setContador(novoValor);
    }

    return (
        <Template title="Contador">
            <div className="counter">
                <span>{contador}</span>
                <button onClick={() => handleOnClick('-')}>-</button>
                <button onClick={() => handleOnClick('+')}>+</button>
            </div>
        </Template>
    )
}

export default Counter