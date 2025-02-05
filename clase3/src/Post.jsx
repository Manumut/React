import React, { useEffect, useState } from 'react';
import './Posts.css';
import SearchBar from './SearchBar'; // Importar el componente de búsqueda

const Post = () => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState(""); // Estado para el buscador

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
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className="container border p-5 ">
                {/* Componente SearchBar */}
                <SearchBar search={search} setSearch={setSearch} /> {/* Usar el componente de búsqueda */}
                
                <div className="row p-4">
                    {filteredPosts.map(post => (
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
