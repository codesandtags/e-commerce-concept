import React, { useState } from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { ButtonsBarContainer, SignInContainer, SignInTitle } from './SignIn.styles';
import { emailSignInStart, googleSignInStart } from '../../store/user/user.actions';
import { useDispatch } from 'react-redux';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart({ email, password }));
            setEmail('');
            setPassword('');
        } catch (error) {
            alert('Upppss wrong email or password');
        }
    };

    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
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
                <ButtonsBarContainer>
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton
                        type='button'
                        onClick={() => dispatch(googleSignInStart())}
                        isGoogleSignIn
                    >
                        Sign in with Google
                    </CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    );
}

export default SignIn;