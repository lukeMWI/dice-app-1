import React from "react";

export default class Die extends React.Component {
	getDiceResult = () => Math.floor(Math.random() * Math.floor(this.props.sideCount)) + 1; 
	state = {
		currentRoll: this.props.sideCount,
		modifierNum: 0,
		modifierSign: '+',
		modifiedRoll: '',
	}
	rollDice = () => {
		const result = this.getDiceResult()
		this.setState({ 
			currentRoll: result 
		});
	}
	toggleModifierSign = () => {
		this.setState((prevState) => {
			if (prevState.modifierSign === '+') {
				return {
					modifierSign: '-',
					modifierNum: parseInt('-' + this.state.modifierNum),
				}
			} else {
				return {
					modifierSign: '+',
					modifierNum: Math.abs(this.state.modifierNum),
				}
			}
		});
	}
	handleModifierInputChange = event => {
		const target = event.target;
    var value = target.value;
    const name = target.name;
    value = this.state.modifierSign + value;
    value = parseInt(value);

    this.setState({
      modifierNum: value,
    });
	}
	addModifier = () => {
		this.setState({ 
			modifiedRoll: this.state.currentRoll + this.state.modifierNum
		});
	}
	render() {
		return (
			<div className="dice-wrapper">
				<img className="d6" src={`dice/d${ this.props.sideCount }-${ this.state.currentRoll }.png`} width="70" height="70" alt="die img"></img>
				<p className="number">{ this.state.currentRoll }</p>
				<button className="roll-button" onClick={ this.rollDice }>Roll</button>
				<div className="modifier">
					<p>Modifier</p>
					<button className="mod-val" onClick={ this.toggleModifierSign }>{ this.state.modifierSign }</button>
					<input type="text" name="modifier" onChange={ this.handleModifierInputChange }></input>
					<button className="add-to-roll" onClick={ this.addModifier }>Add to roll</button>
					<p className="modified-roll">Modified Roll: { this.state.modifiedRoll }</p>
				</div>
			</div>
		);
	}
}