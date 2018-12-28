import { h, Component } from "preact";

import Demo from '../sketches/Demo';

const routes = {
  demo : Demo
}

export class Sketch extends Component {
  constructor(props) {
    super(props);
    // const sketchID = this.props.sketch;
    // this.sketch = routes[sketchID];
  }

  componentDidMount() {
    const sketchID = this.props.id;
    console.log({sketchID});
    const sketch = routes[sketchID];
    if (sketch) {
      this.setState({ sketch, sketchID });
    }
    // this.sketch = routes[sketchID];
  }

  render(props, { sketchID = 'null'}) {
    const SketchComponent = this.state.sketch;
    return (
      <div>
        <h1>Loading... {this.state.sketchID}</h1>
        {/* <link rel="stylesheet" type="text/css" href=""/> */}
        <SketchComponent />
      </div>
    );
  }
}

export default Sketch;