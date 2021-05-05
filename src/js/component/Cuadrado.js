import React from "react";
import PropTypes from "prop-types";

export const Cuadrado = props => {
	return (
		<div>
			<div className="grid-item cuadrado">{props.forma}</div>
		</div>
	);
};

forma.propTypes = {
	name: PropTypes.string
};
