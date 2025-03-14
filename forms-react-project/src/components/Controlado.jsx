import React, { useState } from 'react';

const Controlado = () => { 
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [state, setState] = useState('pendiente');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description, state);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title" 
                type="text" 
                placeholder="Ingrese To do" 
                value={title} 
                className="form-control mb-2"
                onChange={e => setTitle(e.target.value)}
            />
            <textarea 
                name="description" 
                className="form-control mb-2" 
                placeholder="Ingrese descripción" 
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <select 
                name="state" 
                className="form-select mb-2" 
                value={state} 
                onChange={e => setState(e.target.value)}
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Competado</option>
            </select>
            <button className="btn btn-primary" type="submit">
                Procesar
            </button>                     
        </form>        
    );
};

export default Controlado;