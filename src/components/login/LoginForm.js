import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errors: {},
            submitted: false,
        };
    }

    validateForm = () => {
        const { username, password } = this.state;
        const errors = {};

        if (!username) {
            errors.username = 'Username is required';
        }

        if (!password) {
            errors.password = 'Password is required';
        }

        this.setState({ errors });
        return Object.keys(errors).length === 0;
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.validateForm()) {
            // Submit the form data (simulate submission in this example)
            console.log('Form submitted:', this.state);
            this.setState({ submitted: true });
        }
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { username, password, errors, submitted } = this.state;

        return (
            <div>
                <h2>Login</h2>
                {submitted ? (
                    <p>Login successful!</p>
                ) : (
                    <form onSubmit={this.handleSubmit}>
                        <label>Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={this.handleChange}
                        />
                        {errors.username && <span className="error">{errors.username}</span>}

                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                        {errors.password && <span className="error">{errors.password}</span>}

                        <button type="submit">Login</button>
                    </form>
                )}
            </div>
        );
    }
}

export default LoginForm;
