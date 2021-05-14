import React from "react";

class ThisConstructor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { teamColor: "" };

    this.redTeam = this.redTeam.bind(this);
    this.blueTeam = this.blueTeam.bind(this);
  }

  redTeam() {
    this.setState({ teamColor: "Red" });
  }

  blueTeam() {
    this.setState({ teamColor: "Blue" });
  }
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

export default ThisConstructor;
