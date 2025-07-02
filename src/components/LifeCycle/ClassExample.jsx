import React, { Component } from "react";

export default class ClassExample extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         counter: 0,
    //         fName: "",
    //         seconds: 0,
    //     };
    //     console.log("Constructor called.");
    // }
    // // static getDerivedStateFromProps() {
    // //     console.log("get derived state from props called...")
    // // }
    // increment = () => {
    //     this.setState({ counter: this.state.counter + 1 }, () =>
    //         console.log(this.state)
    //     );
    // };

    // decrement = () => {
    //     this.setState((prevState) => ({
    //         counter: prevState.counter - 1,
    //     }));
    //     console.log(`${JSON.stringify(this.state)}`);
    // };

    // handleNameChange = (newName) => {
    //     this.setState((prevState) => ({
    //         ...prevState,
    //         fName: newName,
    //     }));
    //     // console.log(`${JSON.stringify(this.state)}`);
    // };

    // componentDidUpdate() {
    //     console.log(`${JSON.stringify(this.state)}`);
    // }

    // componentDidMount() {
    //     this.interval = setInterval(() => {
    //         this.setState((prev) => ({ seconds: prev.seconds + 1 }));
    //     }, 1000);
    // }
    
    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }

    render() {
        return (
            <>
                {/* <p>{this.props.name} passed out today</p>
                <div>{this.state.counter}</div>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <br />
                <input
                    type="text"
                    onChange={(e) => this.handleNameChange(e.target.value)}
                />
                <p>{this.state.fName}</p> */}
                <Timer />
            </>
        );
    }
}
export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    console.log("Mounted");
    this.interval = setInterval(() => {
      this.setState(prev => ({ seconds: prev.seconds + 1 }));
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.seconds !== this.state.seconds) {
      console.log("Timer updated:", this.state.seconds);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("Unmounted");
  }

  render() {
    return <h2>Timer: {this.state.seconds}s</h2>;
  }
}


export class BinderExample extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
        this.handleClick = this.handleClick.bind(this); // Manual binding
    }

    handleClick() {
        this.setState({ clicked: true })
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>Click me</button>
                {this.state.clicked && <p>Button was clicked!</p>}
            </>
        );
    }
}
