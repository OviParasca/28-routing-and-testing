import React from 'react';
import {Link} from 'react-router-dom';
import uuid from 'uuid/v4';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notes:{},
    };

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  addNote(note) {
    console.log(note.title);
    // id: always should contain the result of uuid.v1()
    // editing: false by default
    // completed: false by default
    // content: user provided content
    // title: user provided title
  }

  removeNote(note) {

  }

  render() {
    return (
      <div>
        <h2>Create a new note:</h2>
        <ul>
          <li><Link to='/notecreateform'>Create A New Note</Link></li>
        </ul>
      </div>
    );
  }
}
