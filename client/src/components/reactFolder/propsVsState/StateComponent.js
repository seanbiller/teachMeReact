import React from "react";

class StateComponent extends React.Component {
  state = { sodaType: "Choose A Soda" };

  buyCocaCola = () => {
    this.setState({ sodaType: "Coca-Cola" });
  };

  buyPepsi = () => {
    this.setState({ sodaType: "Pepsi" });
  };

  buyMountainDew = () => {
    this.setState({ sodaType: "Mountain Dew" });
  };

  buyDrPepper = () => {
    this.setState({ sodaType: "Dr Pepper" });
  };

  render() {
    return (
      <div>
        <h1>Vending Machine</h1>
        <input onClick={this.buyCocaCola} type="radio" name="soda" />
        <label for="soda">Coca-Cola</label>
        <br />
        <input onClick={this.buyPepsi} type="radio" name="soda" />
        <label for="soda">Pepsi</label>
        <br />
        <input onClick={this.buyMountainDew} type="radio" name="soda" />
        <label for="soda">Mountain Dew</label>
        <br />
        <input onClick={this.buyDrPepper} type="radio" name="soda" />
        <label for="soda">Dr Pepper</label>
        <br />
        <h3>Soda Choice: {this.state.sodaType}</h3>
      </div>
    );
  }
}

export default StateComponent;
