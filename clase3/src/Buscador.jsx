import React from 'react';

const Buscador = ({ buscar, setBuscar }) => {
    return (
        <div className="row mb-4">
            <div className="col-md-12">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar por título..."
                    value={search}
                    onChange={(e) => setBuscar(e.target.value)} // Actualiza el estado de búsqueda
                />
            </div>
        </div>
    );
};

export default Buscador;
