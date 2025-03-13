import { useRef } from "react";

const NoControlado = () => {    

    const form = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando formulario...");
        console.log(form.current);
        /*
        const data = {
            title: e.target.title.value,
            description: e.target.description.value,
            state: e.target.state.value
        };
        console.log(data);
        e.target.reset();
        */
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
        </form>        
    );
};

export default NoControlado;