import React from "react";

class MyClassComponent extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("Constructor called");
  }

  // Increment counter
  increment = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps called");
    return null; // No state update based on props
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate called");
    console.log("Previous Props:", prevProps);
    console.log("Previous State:", prevState);
    return `Snapshot at counter: ${prevState.counter}`;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate called");
    console.log("Snapshot received:", snapshot);
  }

  render() {
    console.log("Render method called");
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default MyClassComponent;
