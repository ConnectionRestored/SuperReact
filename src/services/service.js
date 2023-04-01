import React from "react";

const withServices = WrappedComponent => {
  class WithServices extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: null
      }
      
    }  
    getUsers() {
      fetch("https://reqres.in/api/users")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              loaded: true,
              items: result.items
            });
          },
          (error) => {
            this.setState({
              loaded: true,
              error
            });
          }
        )
    }
  
    render() {
      return (
        <WrappedComponent users={this.state.users} getUsers={this.getUsers} />                
      )
    }
  }
}

export default withServices;














