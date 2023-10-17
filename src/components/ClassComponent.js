import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0, // Initial state is 0
            product_name: 'Iphone' // Initial state is 'Iphone'
        };
    }

    componentDidMount() {
        // Fetch data from an API
        // Update component state with fetched data
    }

    componentDidUpdate(prevProps) {
        if (this.props.userId !== prevProps.userId) {
            // Fetch content shared by the new user
        }
    }

    componentWillUnmount() {
        // Cleanup tasks like canceling subscriptions
    }
    render() {
        return (
            <div>
                <h1>Hello from Class Component!</h1>
                <p>This is a class component in React.</p>
                <div>{this.state.product_name} : {this.state.count}</div>
            </div>
        );
    }
}

export default ClassComponent;
