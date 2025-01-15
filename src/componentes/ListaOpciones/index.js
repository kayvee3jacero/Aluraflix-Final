import React from "react";

const ListaOpciones = ({ valor, actualizarCategoria, required }) => {
    return (
        <div>
            <label>Categoría</label>
            <select 
                value={valor} 
                onChange={(e) => actualizarCategoria(e.target.value)} 
                required={required}>
                <option value="">Seleccione una categoría</option>
                <option value="Front End">Front End</option>
                <option value="Back End">Back End</option>
                <option value="Innovación y Gestión">Innovación y Gestión</option>
            </select>
        </div>
    );
};

export default ListaOpciones;
