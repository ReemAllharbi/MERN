import React, { Component } from "react";

class PersonCard extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
  }
  buttonClicked() {
    console.log("button got clicked in person card ");

    this.props.handleButtonClick(this.props.person.id);

  }
  render() {
    const { buttonClicked , firstName, lastName, age, hairColor } = this.props.person;
    return (
      <div>
        <h3>
          {firstName} {lastName}
        </h3>
        <p>Age: {age}</p>
        <p>Hair color: {hairColor}</p>
        <button onClick={this.buttonClicked}>
          Birthday button for {firstName} {lastName}
        </button>
      </div>
    );
  }
}

export default PersonCard;