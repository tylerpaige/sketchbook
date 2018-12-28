import { h, Component } from 'preact';
import { Router } from 'preact-router'
import Home from './Home';
import Error from './Error';
import Demo from '../sketches/Demo';
import Sketch from './Sketch';

export class App extends Component { 
  render() {
    return (
      <div class="app">
        <Router>
          <Home path="/" />
          <Sketch path="/sketch/:id" />
          <Error default />
        </Router>
      </div>
    );
  }
};

export default App;