import React from 'react';

import './sign-up.styles.scss';
import FormInput from "../../pages/form-input/form-input.component";


class SignUp extends React.Component {
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
            <div className='sign-up'>
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
                    <input type='submit' value='Submit Form'/>
                </form>
            </div>
        );
    }
}

export default SignUp;
