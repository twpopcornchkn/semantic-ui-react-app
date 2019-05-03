import React, { Component } from 'react'
import { Grid, Menu, Segment, Icon } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';
import BreadCrumb from '../components/layout/breadCrumb';



class SuiMenu extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.history.push(name);
  }

  render() {
    const { activeItem } = this.state

    return (
      <Grid className="tabMenu">
        <Grid.Column width={4}>
          <Menu tabular vertical fluid>
            <Menu.Item name='realTime' active={activeItem === 'realTime'} onClick={this.handleItemClick}>
              <Icon name='gamepad' floated='left' /> Real-Time
            </Menu.Item>
            <Menu.Item name='acquisition' active={activeItem === 'acquisition'} onClick={this.handleItemClick}>
              <Icon name='handshake outline' floated='left' /> Acquisition
            </Menu.Item>
            <Menu.Item name='retention' active={activeItem === 'retention'} onClick={this.handleItemClick}>
              <Icon name='retweet'/> Retention
            </Menu.Item>
            <Menu.Item name='behaviour' active={activeItem === 'behaviour'} onClick={this.handleItemClick}>
              <Icon name='cogs'/> Behaviour
            </Menu.Item>
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            <BreadCrumb />
            {this.props.children}
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default withRouter(SuiMenu);