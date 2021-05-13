import React from "react";
import { connect } from "react-redux";
import cancha from "../cancha.svg";

const Titulares = ({ titulares, quitarTitular }) => (
  <section>
    <h2>Titulares</h2>
    <div className="cancha">
      {titulares.map((titular) => (
        <article className="titular" key={titular.id}>
          <div>
            <img src={titular.foto} alt={titular.nombre} />
            <button onClick={() => quitarTitular(titular)}>X</button>
          </div>
          <p>{titular.nombre}</p>
        </article>
      ))}
      <img src={cancha} alt="cancha"></img>
    </div>
  </section>
);

const mapStateToProps = (state) => ({
  titulares: state.titulares,
});

const mapDispatchToProps = (dispatch) => ({
  quitarTitular(jugador) {
    dispatch({
      type: "QUITAR_TITULAR",
      jugador,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
