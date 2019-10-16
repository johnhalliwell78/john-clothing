import React from 'react';

import './sign-in.styles.scss';
import FormInput from "../../pages/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

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
                    <CustomButton type='submit'> Sign In </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
