import React from "react";

export default class Die extends React.Component {
  state = {
    currentRoll: this.props.sideCount,
    modifierNum: 0,
    modifierSign: "+",
    modifiedRoll: ""
  };

  getDiceResult = () => {
    const { sideCount } = this.props;
    let result = Math.random() * sideCount;
    return Math.floor(result) + 1;
  };

  rollDice = () => {
    const result = this.getDiceResult();
    this.setState({ currentRoll: result });
  };

  toggleModifierSign = () => {
    const { modifierSign } = this.state;
    const newSign = modifierSign === "+" ? "+" : "-";
    this.setState({ modifierSign: newSign });
  };

  formatModifierInput = event => {
    const target = event.target;
    let value = target.value;
    value = this.state.modifierSign + value;
    return parseInt(value);
  };

  handleModifierInputChange = event => {
    const value = this.formatModifierInput(event);
    this.setState({ modifierNum: value });
  };

  addModifier = () => {
    const { currentRoll, modifierNum } = this.state;
    this.setState({ modifiedRoll: currentRoll + modifierNum });
  };

  render() {
    return (
      <div className="dice-wrapper">
        <img
          className="d6"
          src={`dice/d${this.props.sideCount}-${this.state.currentRoll}.png`}
          width="70"
          height="70"
          alt="die img"
        />
        <p className="number">{this.state.currentRoll}</p>
        <button className="roll-button" onClick={this.rollDice}>
          Roll
        </button>
        <div className="modifier">
          <p>Modifier</p>
          <button className="mod-val" onClick={this.toggleModifierSign}>
            {this.state.modifierSign}
          </button>
          <input
            type="number"
            min="0"
            name="modifier"
            onChange={this.handleModifierInputChange}
          />
          <button className="add-to-roll" onClick={this.addModifier}>
            Add to roll
          </button>
          <p className="modified-roll">
            Modified Roll: {this.state.modifiedRoll}
          </p>
        </div>
      </div>
    );
  }
}
