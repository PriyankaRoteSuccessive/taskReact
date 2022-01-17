import React from "react";
class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
    componentDidMount() {
      this.interval = setInterval(() => this.setState({ seconds: this.state.seconds+1 }), 1000);
    }
    render() {
      return (
        <div>
          Seconds: {this.state.seconds}
        </div>
      );
    }
  }
  export default Timer;