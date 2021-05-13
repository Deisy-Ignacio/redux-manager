import { Provider } from "react-redux";
//Para que la aplicación se entere que tiene que leer la data, se envuelve en un Provider
import Jugadores from "./components/Jugadores";
import EquipoSeleccionado from "./components/EquipoSeleccionado";
import store from "./store";
import "./styles/styles.scss";
function App() {
  return (
    <Provider store={store}>
      {/*El Provider tiene que saber que va a proveer, se pasa el store como params */}
      <main>
        <h1>Manager</h1>
        <Jugadores />
        <EquipoSeleccionado />{" "}
      </main>
    </Provider>
  );
}

export default App;
