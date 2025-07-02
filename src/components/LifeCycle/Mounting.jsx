import React, { Component } from "react";

export default class Mounting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            age: 0,
        };
        this.containerRef = React.createRef();
        this.increment = this.increment.bind(this);
        console.log("Constructor called");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps");
        if (nextProps.count !== prevState.count) {
            console.log("inside getDerivedStateFromProps if statement");
            return {
                count: prevState.count,
                age: prevState.count * 10,
            };
        }
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("inside shouldComponentUpdate");
        console.log("nextProps:", nextProps);
        console.log("nextState:", nextState);
        return true; // Always allow update to test snapshot
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("📸 inside getSnapshotBeforeUpdate");
        if (this.containerRef.current) {
            const scrollPosition = this.containerRef.current.scrollTop;
            console.log("Scroll position before update:", scrollPosition);
            return scrollPosition;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("✅ inside componentDidUpdate");
        console.log("Previous props:", prevProps);
        console.log("Previous state:", prevState);
        console.log("Current state:", this.state);
        console.log("Snapshot (scrollTop before update):", snapshot);

        if (prevState.count !== this.state.count) {
            document.title = `Count: ${this.state.count}`;
        }
    }

    componentDidMount() {
        console.log("component did mount called")
    }

    increment() {
        console.log("called increment");
        this.setState((prevState) => ({
            ...prevState,
            count: prevState.count + 1,
        }));
    }

    render() {
        console.log("🎨 inside render");
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increase</button>
                <p>Age: {this.state.age}</p>
            </div>
        );
    }
}
