import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import Landing from '../landing/index.js';
import Dashboard from '../dashboard/index.js';
import '../../style/app.scss';
import NoteCreateForm from '../note-create-form/index.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header title="** Notes **" />
            <main>
              <Route exact path="/" component={Landing} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/notecreateform" component={NoteCreateForm} />
            </main>
          <Footer footerText="Bottom bar" />
        </React.Fragment>
      </BrowserRouter>
    );
  }

}