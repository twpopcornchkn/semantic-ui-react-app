import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';

class hMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name });
      this.props.history.push(name);
    }

  render() {
    const { activeItem } = this.state

    return (
  
    <div className="ui attached stackable menu inverted">
    <div className="ui container">
        <a href="/" className="item">
        <i className="home icon"></i> Home
        </a>
        <a href="/aboutUs" className="item">
        <i className="grid layout icon"></i> About Us
        </a>
        <a href="/jobs" className="item">
        <i className="mail icon"></i> Jobs
        </a>
        <div className="ui simple dropdown item">
        More
        <i className="dropdown icon"></i>
        <div className="menu">
            <a className="item"><i className="edit icon"></i> Edit Profile</a>
            <a className="item"><i className="globe icon"></i> Choose Language</a>
            <a className="item"><i className="settings icon"></i> Account Settings</a>
        </div>
        </div>
        <div className="right item">
        <div className="ui input"><input type="text" placeholder="Search..."/></div>
        </div>
    </div>
    </div>
    )
  }
}

export default withRouter(hMenu);

