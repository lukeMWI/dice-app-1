import React, { useState } from 'react';
import DieImage from "./DieImage";
import RollButton from "./RollButton";
import Modifier from "./Modifier";

const Die = ({sides}) => {
	const [rollResult, setRollResult] = useState(sides);

	const rollDice = () => {
		setRollResult(Math.floor(Math.random() * Math.floor(sides)) + 1);
	};

	const getImagePath = () => `dice/d${ sides }-${ rollResult }.png`

	return (
		<div className="dice-wrapper">
			<DieImage src={getImagePath()}/>
			<RollButton rollDice={ () =>  rollDice() }/>
			<Modifier rollResult={ rollResult } />
		</div>
	);
}

export default Die;

