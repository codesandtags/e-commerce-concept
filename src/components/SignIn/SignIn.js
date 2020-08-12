import React, { useState } from 'react';

import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import {
    auth,
    signInWithGithub,
    signInWithGoogle
} from '../../firebase/firebase.utils';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setEmail('');
            setPassword('');
        } catch(error) {
            alert('Upppss wrong email or password');
        }
    };

    return (
        <div className='sign-in'>
            <h2 className="title">I already have an account</h2>
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
                <div className="buttons">
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton type='button'
                                  onClick={signInWithGoogle}
                                  isGoogleSignIn={true}
                    >
                        Sign in with Google
                    </CustomButton>
                    <CustomButton type='button'
                                  onClick={signInWithGithub}
                                  isGoogleSignIn={true}
                    >
                        Sign in with Github
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignIn;