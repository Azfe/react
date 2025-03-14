import { useRef, useState } from "react";

const NoControlado = () => {    

    const form = useRef(null);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Limpia de errores el formulario
        
        // Capturar los datos del formulario
        const data = new FormData(form.current);

        /* spread operator: permite a un elemento iterable ser expandido
        / copia cada uno de sus elementos
        / El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto. */
        const {title, description, state} = Object.fromEntries([...data.entries()]);
        

        // Validar los datos
        if (!title.trim() || !description.trim()) {            
            return setError('Datos incompletos');
        }

        // Enviar los datos
        console.log(title, description, state);
    };

    return (
        <form onSubmit={handleSubmit} ref={form}>
            <input name="title" type="text" placeholder="Ingrese todo" className="form-control mb-2"/>
            <textarea name="description" className="form-control mb-2" placeholder="Ingrese descripción" />
            <select name="state" defaultValue="pendiente" className="form-select mb-2">
                <option value="pendiente">Pendiente</option>
                <option value="completado">Competado</option>
            </select>
            <button className="btn btn-primary" type="submit">Procesar</button> 
            {error && <div className="alert alert-danger mt-2">{error}</div>}           
        </form>        
    );
};

export default NoControlado;