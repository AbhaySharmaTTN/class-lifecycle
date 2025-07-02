import React, { Component } from "react";
import { ApiItem } from "./ApiCall";

export default class ApiCall2 extends Component {
    constructor(props) {
        console.log("Constructor called...")
        super(props);
        this.state = {
            apiItem: {
                id: 1,
                title: "His mother had always taught him",
                body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
                tags: ["history", "american", "crime"],
                reactions: {
                    likes: 192,
                    dislikes: 25,
                },
                views: 305,
                userId: 121,
            },
            url: "https://dummyjson.com/posts",
            currentPage: 1,
        };
    }

    async componentDidMount() {
        console.log("Component did mount called...")
        const url = this.state.url + "/" + this.state.currentPage;
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        this.setState((this.state.apiItem = data));
        // console.log(this.state);
    }
    async componentDidUpdate(prevProps, prevState) {
        console.log("update called")
        if (prevState.currentPage !== this.state.currentPage) {
            const url = this.state.url + "/" + this.state.currentPage;
            const response = await fetch(url);
            const data = await response.json();
            this.setState({ apiItem: data });
        }
    }

    next = () => {
        console.log("next called");
        if (this.state.currentPage < 30) {
            this.setState((prevState) => ({
                ...prevState,
                currentPage: prevState.currentPage + 1,
            }));
        } else {
            this.setState((prevState) => ({
                ...prevState,
                currentPage: 1,
            }));
        }
    };

    render() {
        console.log("render called...")
        return (
            <div>
                <button onClick={this.next}>Next</button>
                <ApiItem item={this.state.apiItem}></ApiItem>
            </div>
        );
    }
}
