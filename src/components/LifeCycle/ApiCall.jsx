import React, { Component, useEffect } from "react";

export default class ApiCall extends Component {
    constructor(props) {
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
            url: "https://dummyjson.com/posts/1",
        };
    }

    async componentDidMount() {
        const response = await fetch("https://dummyjson.com/posts/1");
        const data = await response.json();
        console.log(data);
        this.setState((this.state.apiItem = data));
    }

    render() {
        return (
            <div>
                <ApiItem item={this.state.apiItem}></ApiItem>
            </div>
        );
    }
}

export function ApiItem({ item }) {
    return (
        <>
            <p>Id: {item.id}</p>
            <p>Title: {item.title}</p>
            <p>{item.body}</p>
            {item.tags.map((element, index) => (
                <p key={index}>{element}</p>
            ))}
            {Object.keys(item.reactions).map((element, index) => (
                <p key={index}>
                    {element}:{item.reactions[element]}
                </p>
            ))}
            <p>{item.views}</p>
            <p>{item.userId}</p>
        </>
    );
}
