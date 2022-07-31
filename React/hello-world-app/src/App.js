import React from "react";
import Header from "./Header";
import Content from "./Content";

import Cards from "./Cards";
import Card from "./Card";

import reactImg from './imagens/reactjs.png';
import nodeImg from './imagens/nodejs.png';
import nextImg from './imagens/nextjs.png';

/*
    COMPONENTES - Criando e Usando

    - Import React
    - Função que retorna JSX
        - Sempre tem que ter um elemento pai
        - React Fragment
    - Exportar Função
    - Para usar o componente:
        - Importar
        - Usar como tag, exemplo: <App />
    - Componentes podem receberm propriedades, exemplo: <Header titulo="texto" />

*/

function App() {
    return (
        <>
            <Header titulo="Olá mundo" subtitulo="Vamos que vamos" />
            <Content titulo="Bem-vindo">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                <Cards>
                    <Card
                        imagem={reactImg}
                        titulo="Titulo 1"
                        texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
                    />

                    <Card
                        imagem={nodeImg}
                        titulo="Titulo 1"
                        texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
                    />

                    <Card
                        imagem={nextImg}
                        titulo="Titulo 1"
                        texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
                    />
                </Cards>
            </Content>
        </>
    )
}

export default App