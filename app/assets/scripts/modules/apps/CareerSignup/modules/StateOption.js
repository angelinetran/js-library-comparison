import React, { Component } from 'react';

class StateOptions extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <option value="{this.props.value}">{this.props.label}</option>
    )
  }
}
export default StateOptions
