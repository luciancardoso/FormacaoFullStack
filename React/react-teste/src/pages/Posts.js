import React, { useState, useEffect } from "react";

const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
    }, [])

    return (
        <>
            {
                posts.map(post => {
                    return (
                        <div>
                            <b>Titulo:</b> {post.title}<br/>
                            <b>Frase - </b> {post.body}<br/>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Posts