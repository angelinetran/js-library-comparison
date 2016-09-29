import React, { Component } from 'react';
import _ from 'lodash';
import StateData from '../../../../json/states.json';
import { Link, IndexLink, browserHistory } from 'react-router';
import DesignSignUpForm from './DesignSignUpForm';
import DevelopSignUpForm from './DevelopSignUpForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobTitle: '',
      stateData: []
    }
  }

  componentDidMount() {
    this.setState({stateData: StateData});
  }

  _handleJobTitleSelection() {
    let form = undefined;

    switch (this.state.jobTitle) {
      case 'developer':
        form = <DevelopSignUpForm stateData={this.state.stateData} />
        break;
      case 'designer':
        form = <DesignSignUpForm stateData={this.state.stateData} />
        break;
      default:
        console.log( 'none selected');
    }

    return form;
  }

  _updateUrl(jobTitle) {
    browserHistory.push('/react.html?' + jobTitle);
  }

  handleButtonClick(jobTitle, e) {
    this._updateUrl(jobTitle);
    this.setState({jobTitle: jobTitle});
  }

  render() {
    let form = this._handleJobTitleSelection();

    return (
      <div>
        <button
          className="btn btn-default"
          onClick={() => this.handleButtonClick('developer')}
          >Developer
        </button>&nbsp;
        <button
          className="btn btn-default"
          onClick={() => this.handleButtonClick('designer')}
          >Designer
        </button>

        {form}
      </div>
    )
  }
}
export default App