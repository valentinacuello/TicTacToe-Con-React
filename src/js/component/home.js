import React, { useState } from "react";
import Tablero from "./Tablero";
import Inicio from "./Inicio";

//create your first component
export function Home() {
	const [estaListo, setEstaListo] = useState(false);
	const [turnoActual, setTurnoActual] = useState("");
	const [playerUno, setPlayerUno] = useState("");
	const [playerDos, setPlayerDos] = useState("");

	const listoParaJugarO = () => {
		setEstaListo(true);
		setTurnoActual("O");
	};

	const listoParaJugarX = () => {
		setEstaListo(true);
		setTurnoActual("X");
	};

	const cambiarTurno = () => {
		if (turnoActual == "X") {
			setTurnoActual("O");
		} else if (turnoActual == "O") {
			setTurnoActual("X");
		}
		return turnoActual;
	};

	const cambiaPlayerUno = nombre => {
		setPlayerUno(nombre);
	};

	const cambiaPlayerDos = nombre => {
		setPlayerDos(nombre);
	};

	return (
		<div>
			{estaListo == true ? (
				<Tablero
					turnoActual={turnoActual}
					cambiarTurno={cambiarTurno}
					playerUno={playerUno}
					playerDos={playerDos}
				/>
			) : (
				<Inicio
					listoParaJugarO={listoParaJugarO}
					listoParaJugarX={listoParaJugarX}
					playerUno={cambiaPlayerUno}
					playerDos={cambiaPlayerDos}
				/>
			)}
		</div>
	);
}
