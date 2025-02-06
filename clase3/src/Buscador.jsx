import React from 'react';

const Buscador = ({ setFiltro }) => {
    function cambiar(e) {{
        setFiltro(e.target.value);
    }}
    return (
        <div >
            <input type="text" onChange={cambiar} className='form-control' placeholder='Filtrar por titulo'/>
        </div>
    );
};

export default Buscador;
