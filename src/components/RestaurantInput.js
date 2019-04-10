import React, { Component } from "react";
import { addRestaurant } from "../actions/restaurants";
import { connect } from "react-redux";

export class RestaurantInput extends Component {
  state = {
    name: "",
    location: ""
  };

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    //take the values entered and then create a funciton that gets into mapDispatchToProps
    this.props.addRestaurant(this.state);
    // add missing code
  };

  render() {
    return (
      <form onSubmit={event => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={event => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name"
          />
        </p>
        <p>
          <input
            type="text"
            onChange={event => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location"
          />
        </p>
        <input type="submit" />
      </form>
    );
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     addRestaurant: values => {
//       dispatch(addRestaurant(values));
//       //take those and add dispatch the action
//     }
//   };
// };
//connect this component by wrapping RestaurantInput below
export default connect(
  null,
  { addRestaurant }
)(RestaurantInput);
