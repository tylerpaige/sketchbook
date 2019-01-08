import { h, Component } from 'preact';
import { Router } from 'preact-router'
import Home from './Home';
import Error from './Error';
import Sketch from './Sketch';

export class App extends Component { 
  render() {
    return (
        <Router>
          <Home path="/" />
          <Sketch path="/sketch/:id" />
          <Error default />
        </Router>
    );
  }
};

export default App;