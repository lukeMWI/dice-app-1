import React from "react";

const DiceButtons = ({ rollDice }) => {

	return (
		<div className="button-wrapper"> 
			<button>-</button>
			<RollButton rollDice={ rollDice }/>
			<button>+</button>
		</div>
	)
}