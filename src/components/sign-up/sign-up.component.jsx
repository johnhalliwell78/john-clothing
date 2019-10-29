import React from 'react';

import './sign-up.styles.scss';
import FormInput from "../../pages/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    };

    _handleSubmit = async (event) => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (e) {
            console.log('error in sign up process', e);
        }
    };

    _handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign Up With Your Email and Password</span>

                <form className='sign-up-form' onSubmit={(event) => {
                    this._handleSubmit(event);
                }}>
                    <FormInput label="Display Name"
                               name='displayName'
                               type='text'
                               value={this.state.displayName}
                               _handleChange={(event) => {
                                   this._handleChange(event);
                               }} required/>


                    <FormInput label='Email'
                               name='email'
                               type='email'
                               value={this.state.email}
                               _handleChange={(event) => {
                                   this._handleChange(event);
                               }} required/>


                    <FormInput label='Password'
                               name='password'
                               type='password'
                               value={this.state.password}
                               _handleChange={(event) => {
                                   this._handleChange(event);
                               }} required/>

                    <FormInput label='Confirm Password'
                               name='confirmPassword'
                               type='password'
                               value={this.state.confirmPassword}
                               _handleChange={(event) => {
                                   this._handleChange(event);
                               }} required/>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
