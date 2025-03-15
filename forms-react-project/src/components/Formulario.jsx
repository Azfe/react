import Swal from 'sweetalert2';
import { useState } from 'react';

const Formulario = ({addTask}) => { 

    const [task, setTask] = useState({
        title: '',
        description: '',
        priority: true,
        state: 'pendiente'
    });

    const {title, description, priority, state} = task;

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title.trim() || !description.trim()) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Título y descripción obligatorios"                
            });
        };

        addTask({
            id: Date.now(),
            ...task,
            state: state === 'completado' ? true : false,
        });

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Tarea agregada con éxito",
            showConfirmButton: false,
            timer: 1500
        });
        /*
        Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true
        });
        */
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
                Agregar tarea
            </button>                     
        </form>        
    );
};

export default Formulario;