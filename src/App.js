import './App.css';
import Dashboard from './components/Dashboard'
import Fecha from './components/Fecha';

//App.js hace el render de los componentes Dashboard y Fecha

function App() {
  return (
    <div className="App">
      <h1 className="tituloApp"> Aplicacion Clima </h1>
      <Fecha />
      <Dashboard />
    </div>
  );
}

export default App;
