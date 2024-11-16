import React, { useState } from 'react';

import Button from '../Button/Button';
import './RegistrationForm.css';
import  InputField  from '../Inputfield/InputField';


const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Registration Successful!');
    };

    return (
        <form className="registration-form" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <InputField
                label="Username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
            <InputField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <InputField
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <Button text="Register" type="submit" />
        </form>
    );
};

export default RegistrationForm;
