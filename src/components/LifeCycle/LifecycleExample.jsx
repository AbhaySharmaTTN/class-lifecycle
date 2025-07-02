import React, { Component } from "react";

export default class LifecycleExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            textValue: "default value",
        };
        console.log("constructor called.", this.state.textValue);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(prevState.counter !== nextProps.counter) {
            console.log("hello")
        }
        // console.log("get derived called", nextProps, prevState);
        return null;
    }

    componentDidMount() {
        // Equivalent to useEffect(() => {}, [])
        console.log("Component mounted", );
    }

    componentDidUpdate(prevProps, prevState) {
        // Equivalent to useEffect(() => {}, [dependency])
        if (prevState.counter !== this.state.counter) {
            console.log("Component updated called, counter changed", );
        }
    }

    componentWillUnmount() {
        // Equivalent to cleanup in useEffect
        console.log("Component will unmount");
    }

    increment = () => {
        this.setState((prevState) => ({ ...prevState, counter: this.state.counter + 1 }));
        console.log("Increment called.");
    };

    handleTextChange = (newValue) => {
        this.setState((prevState) => ({
            ...prevState,
            textValue: newValue
        }))
    }

    render() {
        return (
            <div>
                {console.log("render called")}
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.increment}>Increment</button><br />
                <input type="text" onChange={(e) => this.handleTextChange(e.target.value)}/>
                <p>{this.state.textValue}</p>
            </div>
        );
    }
}
