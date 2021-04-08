import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

//Components per Note
import { NewNoteModal } from './components/NoteModal';
import {NotesTable} from './components/NotesTable';
//Components per View
import Home from './components/Home';
import Contact from './components/Contact';
import Subscription from './components/Subscription';
import Header from './components/Header';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Contact"  component={Contact} />
        <Route path="/Subscription"  component={Subscription} />
        </Switch>
        <h2>Lab Course: React Notes App</h2>
        <div style={{maxWidth: '70%', margin: 'auto'}}>
          <div style={{textAlign: 'right'}}>
          <NewNoteModal />
          </div>
          <NotesTable />
        </div>
      </div>
      </Router>
    );
}

export default App;
