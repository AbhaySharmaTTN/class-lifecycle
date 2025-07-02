import React, { Component } from "react";

export default class Mounting extends Component {
    constructor(props) {
        super(props); // Always call super(props) before using this.props
        this.state = {
            count: 0, // Initial state
            age: 0,
        };
        (this.increment = this.increment.bind(this)),
            console.log("Constructor called");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps");
        if (nextProps.count !== prevState.count) {
            // Jaha bhi Rough Component call ho raha hai waha pe props pass nahi kiye, isliye props is undefined and hence props.count is also undefined therefore it is not equal to state.count which is 0 initially
            // and even if you pass the value of count as prop e.g. <Rough count={0} /> in the first call we will not see inside logic in console.
            console.log("inside getDerivedStateFromProps if statement");
            console.log("nextProps.count: ",nextProps.count);
            console.log("prevState: ", prevState);
            // props.count = state.count   // why showing error
            return {
                count: prevState.count, // try changing count: state.count to count: props.count, if you have passed any prop then the state.count variable still update but not be returned
                age: prevState.count * 10,
                // count: state.age,
            };
        }
        return null;
    }
    shouldComponentUpdate(nextProps, nextState) {
        // next state or derived state, this shows the updated value from the getDerivedStateFromProps
        console.log("inside shouldComponentUpdate");
        console.log(nextProps);
        console.log(nextState); // gives the updated state of my this.state

        if (nextProps.count !== nextState.count) return true; // I stopped the shouldComponentUpdate method by not updating the nextState which I got from getDerivedStateFromProps
        // don't uncomment this
        // return {
        //         count: props.count,  // try changing count: state.count to count: props.count, if you have passed any prop then the state.count variable still update but not be returned
        //         age: state.count * 10,
        //         // count: state.age,
        //     }
        // this code is from getDerivedStateFromProps
        // now render method will not be called

        return false;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("📸 inside getSnapshotBeforeUpdate");
        console.log(prevProps)
        console.log(prevState)
        if(prevState.count !== this.state.count) {
            return {
                count: this.state.count // the value you will return here will go to componentDidUpdate as `snapshot` try sending any random data
            }
        }
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("inside componentDidUpdate")    // this will not run if 
        // Equivalent to useEffect(() => { ... }, [dependencies])
        console.log(prevProps)
        console.log(prevState)  // old state
        console.log(this.state) // updated state, more like returned value from getDerivedStateFromProps
        console.log("snapshot", snapshot)
        // without if statement it's like useEffect(() => { ... })
        if (prevState.count !== this.state.count) {
            console.log("Count updated");
            document.title = `Count: ${snapshot.count} ${this.state.count}`;

        }
    }
    
    componentDidMount() {
        console.log("✳️ component did mount ")
    }
    increment() {
        console.log("called increment");
        this.setState((prevState) => ({
            ...prevState,
            count: prevState.count + 1,
        }));
    }

    render() {
        console.log("inside render");
        {
            console.log("inside render: ",this.state)
        }
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.increment}>Increase</button>
                <p>{this.state.age}</p>
            </div>
        );
    }
}
