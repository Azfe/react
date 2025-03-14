import NoControlado from "./components/NoControlado";
import Controlado from "./components/Controlado";

const App = () => {
  return (
    <div className="container">
      <h1>Formularios</h1>
      <h2>Formulario no controlado</h2>
      <NoControlado />
      <h2>Formulario controlado</h2>
      <Controlado />
      
    </div>
  );
}

export default App;