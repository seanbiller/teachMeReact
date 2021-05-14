import React from "react";

class ThisClass extends React.Component {
  state = { teamColor: "" };

  redTeam = () => {
    this.setState({ teamColor: "Red" });
  };
  blueTeam = () => {
    this.setState({ teamColor: "Blue" });
  };
  render() {
    return (
      <div>
        <h4>TeamColor: {this.state.teamColor}</h4>
        <br></br>
        <button onClick={this.redTeam}>Pick RedTeam</button>
        <button onClick={this.blueTeam}>Pick BlueTeam</button>
      </div>
    );
  }
}

export default ThisClass;
