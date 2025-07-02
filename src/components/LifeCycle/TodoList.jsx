import React, { Component } from "react";

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: "",
            list: [],
        };
    }

    handleItem = (newItem) => {
        this.setState((prevState) => ({
            ...prevState,
            item: newItem,
        }));
        console.log("Item value: ", newItem);
    };

    addItem = () => {
        if (this.state.item.trim() !== "") {
            this.setState(
                (prevState) => ({
                    ...prevState,
                    list: [...prevState.list, prevState.item],
                    item: "",
                }),
                () => {
                    console.log(this.state.list);
                }
            );
        }
    };

    componentDidMount() {
        this.setState((prevState) => ({
            ...prevState,
            list: [...this.state.list],
        }));
    }

    // componentDidUpdate() {
    //     let n = 10;
    //     while (n > 0) {
    //         this.setState((prevState) => ({
    //             ...prevState,
    //             list: [...this.state.list, n],
    //         }));
    //         n--;
    //     }
    // }

    render() {
        return (
            <>
                <div>
                    <input
                        type="text"
                        value={this.state.item}
                        onChange={(e) => this.handleItem(e.target.value)}
                    />
                    <button onClick={this.addItem}>Add Item</button>
                    {this.state.list.map((element, index) => (
                        <p key={index}>{element}</p>
                    ))}
                </div>
            </>
        );
    }
}
