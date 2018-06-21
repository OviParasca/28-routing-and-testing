import React from 'react';

import {Link} from 'react-router-dom';

import './header.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <h2>{this.props.title}</h2>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
          </ul>
      </header>
    );
  }
}
