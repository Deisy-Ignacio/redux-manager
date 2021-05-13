//almacen para la data de la app
import { createStore } from "redux";

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "Juan Carlitos",
      foto:
        "https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg",
    },
    {
      id: 2,
      nombre: "Beto Quiroga",
      foto:
        "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg",
    },
    {
      id: 3,
      nombre: "Alejo Garcia",
      foto:
        "https://api.ed.team/files/avatars/e58f3a64-aa51-4582-80fa-9bf31c1208b9.jpg",
    },
    {
      id: 4,
      nombre: "Juan Disain",
      foto:
        "https://api.ed.team/files/avatars/695b4af3-3cee-4c2f-a165-b329f926b9d3.jpg",
    },
    {
      id: 5,
      nombre: "Alvaro Felipe",
      foto: "https://ui-avatars.com/api/?name=Alvaro+Fe",
    },
    {
      id: 6,
      nombre: "Alexys Lozada",
      foto: "https://ui-avatars.com/api/?name=A+L",
    },
    {
      id: 7,
      nombre: "Harold Pajuelo",
      foto: "https://ui-avatars.com/api/?name=Ho+Pa",
    },
    {
      id: 8,
      nombre: "Manu Rodriguez",
      foto: "https://ui-avatars.com/api/?name=Manu+R",
    },
    {
      id: 9,
      nombre: "AlejoRodríguez",
      foto: "https://ui-avatars.com/api/?name=John+Doe",
    },
    {
      id: 10,
      nombre: "Andrés Muquinche",
      foto: "https://ui-avatars.com/api/?name=dosk+Lods",
    },
    {
      id: 11,
      nombre: "Ricardo Otero",
      foto: "https://ui-avatars.com/api/?name=Alvara+Felipe",
    },
    {
      id: 12,
      nombre: "Deivis Rivera",
      foto: "https://ui-avatars.com/api/?name=Dei+Riv",
    },
    {
      id: 13,
      nombre: "Percy Tuncar",
      foto:
        "https://api.ed.team/files/avatars/b0801e8a-8bf0-442f-b2ef-0ddaf6ee7aef.png",
    },
  ],
  titulares: [],
  suplentes: [],
};

const reducerEntrenador = (state = initialState, action) => {
  //recibe estado actualy objeto que indica el cambio para estado
  //No se puede retornar undefined por eso, se asigna al state un estado por defecto (initilState)
  switch (action.type) {
    case "AGREGAR_TITULAR":
      return {
        ...state,
        titulares: state.titulares.concat(action.jugador),
        jugadores: state.jugadores.filter(
          (jugador) => jugador.id !== action.jugador.id
        ),
      };
    case "AGREGAR_SUPLENTE":
      return {
        ...state,
        suplentes: state.suplentes.concat(action.jugador),
        jugadores: state.jugadores.filter(
          (jugador) => jugador.id !== action.jugador.id
        ),
      };
    case "QUITAR_TITULAR":
      return {
        ...state,
        titulares: state.titulares.filter(
          (titular) => titular.id !== action.jugador.id
        ),
        jugadores: state.jugadores.concat(action.jugador),
      };
    case "QUITAR_SUPLENTE":
      return {
        ...state,
        suplentes: state.suplentes.filter(
          (suplente) => suplente.id !== action.jugador.id
        ),
        jugadores: state.jugadores.concat(action.jugador),
      };

    default:
  }

  //después de modificar el estado, se retorna un estado nuevo
  return state;
};

export default createStore(reducerEntrenador); //recibe como parametro la función encargada de hacer los cambios-> función reductora
