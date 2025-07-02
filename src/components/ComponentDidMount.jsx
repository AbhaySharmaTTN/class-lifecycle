import React from "react";

class ComponentDidMount extends React.Component {
    constructor(props) {
        console.log("constructor called");
        super(props);
        this.state = {
            count: 0,
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps called");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount called");
    }

    // increment = () => {
    //     this.setState((prevState) => ({
    //         count: prevState.count + 1,
    //     }));
    // };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        console.log("render called");
        return (
            <div>
                <h1>Counter Example</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increase</button>
            </div>
        );
    }
}

export default ComponentDidMount;
