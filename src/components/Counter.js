import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        // Binding the event handler to the instance
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement() {
        // Updating state using setState
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                {/* Attaching event handler to button */}
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }
}

export default Counter;
