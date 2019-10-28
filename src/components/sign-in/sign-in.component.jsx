import React from 'react';

import './sign-in.styles.scss';
import FormInput from "../../pages/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    };

    _handleSubmit = (event) => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    };

    _handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className='sign-in'>
                <h2> I have already an account</h2>
                <span>Sign In With Your Email and Password</span>

                <form onSubmit={() => {
                    this._handleSubmit();
                }}>
                    <FormInput label="email" name='email' type='email' value={this.state.email}
                               _handleChange={(event) => {
                                   this._handleChange(event);
                               }} required/>


                    <FormInput label='password' name='password' type='password' value={this.state.password}
                               _handleChange={(event) => {
                                   this._handleChange(event);
                               }} required/>
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
