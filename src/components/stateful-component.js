import { h, Component } from 'preact';

export class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user : null,
      loading: true
    };

  }

  render() {
    return (
      <div class="example">
        {
          this.state.loading
          ? <p>Please wait...</p>
          : <h1>Done loading!</h1>
        }
      </div>
    );
  }
}

export default Example;