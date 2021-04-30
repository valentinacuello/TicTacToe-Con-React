import React from "react";
import "../../styles/index.scss";

//create your first component
export function Home() {
	return (
		<div className="container-juego">
			<h1>Tic-Tac-Toe with React!</h1>
			<h3>X wins the game!</h3>
			<div className="grid-container">
				<div className="grid-item cuadro1">X</div>
				<div className="grid-item cuadro2">O</div>
				<div className="grid-item cuadro3">X</div>
				<div className="grid-item cuadro4">O</div>
				<div className="grid-item cuadro5">X</div>
				<div className="grid-item cuadro6">O</div>
				<div className="grid-item cuadro7">X</div>
				<div className="grid-item cuadro8">O</div>
				<div className="grid-item cuadro9">X</div>
			</div>
		</div>
	);
}
