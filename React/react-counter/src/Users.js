import React, { useState, useEffect } from "react";
// import Header from "./Header";
import Template from "./Template";

// import imagemLoad from './imagens/loading.gif';
import Loading from "./Loading";

const Users = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data)
                setIsLoading(false)
            })
    }, [])


    return(
        <Template title="Usuários">
            {/* <Header title="Usuários" /> */}

            <Loading visible={isLoading} />
            {/* {
                loading === true ? <img src={imagemLoad} alt="Carregando" /> : ''
            } */}

            {
                users.map(user => {
                    return (
                        <div style={{margin:'10px'}}>
                            <b>Nome: </b> {user.name}<br/>
                            <b>Email: </b> {user.email}<br/>
                            <b>Telefone: </b> {user.phone}<br/>
                            <b>Website: </b> {user.website}<br/>
                        </div>
                    )
                })
            }
        </Template>
    )
}

export default Users