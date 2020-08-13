import React from "react";
import RollButton from "./RollButton";

const DiceButtons = ({ rollDice }) => {

	return (
		<div className="button-wrapper"> 
			{/* <button>-</button> */}
			 <RollButton rollDice={ rollDice }/> 
			{/* <button>+</button> */}
		</div>
	)
}

export default DiceButtons;