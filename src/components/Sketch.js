import { h, Component } from "preact";
import routes from './routes';

export class Sketch extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const sketchID = this.props.id;
    const sketch = routes[sketchID];
    if (sketch) {
      this.setState({ sketch, sketchID });
    }
  }

  render(props, state) {
    const SketchComponent = this.state.sketch;
    return (
      <div>
        <SketchComponent />
      </div>
    );
  }
}

export default Sketch;