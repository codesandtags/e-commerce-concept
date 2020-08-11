import React, { useState } from 'react';

import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        debugger;
        console.log(email);
        console.log(password);
    };

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={(event) => setEmail(event.target.value)}
                    value={email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={(event) => setPassword(event.target.value)}
                    label='password'
                    required
                />
                <CustomButton type='submit'> Sign in </CustomButton>
            </form>
        </div>
    );
}

export default SignIn;