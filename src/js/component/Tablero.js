import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";

const Tablero = props => {
	const [juego, setJuego] = useState(["", "", "", "", "", "", "", "", ""]);
	const [ganador, setGanador] = useState();

	useEffect(() => {
		calcularGanador(juego);
	}, [juego]);

	const marcar = index => {
		let nuevoJuego = juego.map((e, i) => {
			return index == i ? props.turnoActual : e;
		});
		setJuego(nuevoJuego);
	};

	const restart = () => {
		setJuego(["", "", "", "", "", "", "", "", ""]);
	};

	function calcularGanador(cuadrado) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				cuadrado[a] &&
				cuadrado[a] === cuadrado[b] &&
				cuadrado[a] === cuadrado[c]
			) {
				quienSalioGanador(juego[a]);
				restart();
			}
		}
		return null;
	}

	const quienSalioGanador = jugadaGanadora => {
		if (jugadaGanadora == "X") {
			alert("Ganó " + props.playerUno, jugadaGanadora);
		} else {
			alert("Ganó " + props.playerDos, jugadaGanadora);
		}
	};

	return (
		<div className="container-juego">
			<h1>Tic·Tac·Toe with React!</h1>
			<h3>{"El turno actual es de " + props.turnoActual}</h3>
			<div className="grid-container">
				{juego.map((elem, index) => {
					return (
						<div
							className="grid-item"
							onClick={() => {
								if (juego[index] == "") {
									marcar(index);
									props.cambiarTurno();
								}
							}}
							key={index}>
							{elem}
						</div>
					);
				})}
			</div>
			<button onClick={() => restart()}>Restart Game</button>
		</div>
	);
};

Tablero.propTypes = {
	turnoActual: PropTypes.string,
	cambiarTurno: PropTypes.func,
	playerUno: PropTypes.string,
	playerDos: PropTypes.string
};

export default Tablero;
