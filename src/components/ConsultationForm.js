import React, { useState } from 'react';

const ConsultationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validateForm = () => {
        const errors = {};

        if (!name) {
            errors.name = 'Name is required';
        }

        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email format';
        }

        if (!description) {
            errors.description = 'Description is required';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            // Submit the form data (simulate submission in this example)
            console.log('Form submitted:', { name, email, description });
            setSubmitted(true);
        }
    };

    return (
        <div>
            <h2>Request Consultation</h2>
            {submitted ? (
                <p>Consultation request submitted successfully!</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}

                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}

                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    {errors.description && <span className="error">{errors.description}</span>}

                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default ConsultationForm;
