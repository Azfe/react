import React, { use, useState } from 'react';

const Controlado = () => { 

    const [task, setTask] = useState({
        title: '',
        description: '',
        priority: true,
        state: 'pendiente'
    });

    const {title, description, priority, state} = task;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description, state);
    };

    const handleChange = (e) => { 
        
        const {name, type, checked, value} = e.target;
        
        setTask({
            ...task,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title" 
                type="text" 
                placeholder="Ingrese tarea" 
                value={title} 
                className="form-control mb-2"
                onChange={handleChange}
            />
            <textarea 
                name="description" 
                className="form-control mb-2" 
                placeholder="Ingrese descripción" 
                value={description}
                onChange={handleChange}
            />

            <input
                type="checkbox" 
                name="priority" 
                className='form-check-input mb-2' 
                id="inputCheck"
                checked={priority}
                onChange={handleChange}
            />
            <label htmlFor="inputCheck" className="ms-2">Dar prioridad</label>

            <select 
                name="state" 
                className="form-select mb-2" 
                value={state}
                onChange={handleChange}
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