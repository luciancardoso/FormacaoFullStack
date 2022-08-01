import React from "react";
import imagemLoad from '../imagens/loading.gif';

const Loading = ({ visible }) => {
    return (
        <div>
            { visible === true ? <img src={imagemLoad} alt="Carregando" /> : '' }
        </div>
    )
}

export default Loading