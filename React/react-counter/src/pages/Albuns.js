import React, { useState, useEffect } from "react";
// import Template from "./Template";
import Loading from "../components/Loading";

// import loadingImg from './imagens/loading.gif';

const Albuns = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [albuns, setAlbuns] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(data => {
                setAlbuns(data);
                setIsLoading(false);
            })
    }, [])

    return (
        <>
            {/* <Header title="Àlbuns" /> */}

            <Loading visible={isLoading} />
            {/* {
                // loading === true ? 'Carregando...' : ''
                loading === true ? <img src={loadingImg} alt="Carreando" /> : ''
            } */}

            {
                albuns.map(album => {
                    return (
                        <div>
                            <span>{album.title} - id: {album.id}</span>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Albuns