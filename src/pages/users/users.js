import React, { Component } from "react";
import withServices from "../../services/service.js";

class Users extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { users, getUsers } = this.props;

    return (
      <div>{users}</div>
    )
  }
}

export default withServices(Users);