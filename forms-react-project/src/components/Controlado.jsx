

const Controlado = () => {    

    const handleSubmit = (e) => {
        e.preventDefault();
        

        // Enviar los datos
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

export default Controlado;