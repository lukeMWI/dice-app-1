import React, { useState, useEffect } from 'react';
import DieOutput from "./DieOutput";

const Modifier = ({ rollResult }) => {
	const [modifier, setModifier] = useState('');
	const [modifiedRoll, setModifiedRoll] = useState(rollResult);
	const [modifierSign, setModifierSign] = useState('+')

	const toggleModifierSign = () => {
		(modifierSign === '+') ? setModifierSign('-') : setModifierSign('+');
	}

	const handleModifierChange = event => {
		const target = event.target;
    var value = target.value;
    const name = target.name;
    value = parseInt(modifierSign + value);
    setModifier(value);
	}

	useEffect(() => { 
		setModifier(parseInt(modifierSign + Math.abs(modifier)));
	}, [modifierSign]);
	
  useEffect(() => {
  	isNaN(modifier) 
	  	? setModifiedRoll(rollResult) 
	  	: setModifiedRoll(rollResult + modifier)
  }, [modifier, rollResult]);

	return (
		<div className="modifier">
			<DieOutput modifiedRoll={ modifiedRoll } />
			<p>Modifier</p>
			<button className="modifier-sign" onClick={ toggleModifierSign }>{ modifierSign }</button>
			<input type="number" min="0" name="modifier" onChange={ handleModifierChange }></input>
		</div>
	)
}

export default Modifier;