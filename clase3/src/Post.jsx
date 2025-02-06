import React, { useEffect, useState } from 'react';
import './Posts.css';
import Buscador from './Buscador';

const Post = () => {
    const [posts, setPosts] = useState([]);
    const [filtro, setFiltro] = useState(""); // Estado para el buscador

    useEffect(() => {
        // Llamada a la api
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
            // Renderizar en la pagina
            setPosts(datos);
        });
    }, []);

    // Filtra los posts según el valor del buscador
    let entradasFiltradas = posts.filter(entrada =>
        entrada.title.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <>
            
            <div className="container border p-5 ">                
                <div className="row p-4">

                <div className="col-md-12">
                    <Buscador setFiltro={setFiltro}/>
                </div>
                    {entradasFiltradas.map(post => (
                        <div className="col-md-4" key={post.id}>
                            <div className="card post">
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Post;
