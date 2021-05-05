import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";

const Inicio = props => {
	return (
		<div className="inicio-container">
			<h1>Tic·Tac·Toe with React!</h1>
			<h3>Pick a weapon</h3>
			<div className="modal-container">
				<h3>Choose your weapon</h3>
				<div className="input-container">
					<input
						placeholder="Player 1"
						onChange={event => {
							props.playerUno(event.target.value);
						}}></input>
					<input
						placeholder="Player 2"
						onChange={event => {
							props.playerDos(event.target.value);
						}}></input>
				</div>
				<div className="weapons">
					<div className="weapon1" onClick={props.listoParaJugarX}>
						X
					</div>
					<div className="weapon2" onClick={props.listoParaJugarO}>
						O
					</div>
				</div>
			</div>
		</div>
	);
};

Inicio.propTypes = {
	listoParaJugarO: PropTypes.func,
	listoParaJugarX: PropTypes.func,
	playerUno: PropTypes.func,
	playerDos: PropTypes.func
};

export default Inicio;
