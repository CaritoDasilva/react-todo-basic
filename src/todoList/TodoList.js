import React, { Component } from "react";
import Index from '../screens/Home/Index';


export default class TodoList extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = { tareas: [] };

    //     this.addItem = this.addItem.bind(this);
    //     this.removeItem = this.removeItem.bind(this);
    // }

    componentWillMount() {
        fetch('../screens/Home/index.js')
            .then(response => {
                console.log(response);
                return response.json();
            }).then(data => {
                // Work with JSON data here
                console.log(data);
            }).catch(err => {
                // Do something for an error here
                console.log(`Error Reading data ${err}`);
            });
    }

    // addItem(item) {
    //     if (this.state) {
    //         this.setState({ cart: this.state.cart.concat([item]) });
    //         var array = [...this.state.items]; // make a separate copy of the array
    //         var index = array.indexOf(item);
    //         if (index !== -1) {
    //             array.splice(index, 1);
    //             this.setState({ items: array });
    //         }
    //         console.log(this.state);
    //     }
    // }

    // removeItem(item) {
    //     if (this.state) {
    //         this.setState({ items: this.state.items.concat([item]) });
    //         var array = [...this.state.cart]; // make a separate copy of the array
    //         var index = array.indexOf(item);
    //         if (index !== -1) {
    //             array.splice(index, 1);
    //             this.setState({ cart: array });
    //         }
    //         console.log(this.state);
    //     }
    // }
    render() {
        return (
            <div>
                <Index />
                <h1>{title}</h1>
            </div>
        );
    }
}

