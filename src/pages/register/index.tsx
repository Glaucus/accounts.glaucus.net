import React, { ReactNode } from 'react';
import ViewPanel from '../../components/ViewPanel';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {

    render(): ReactNode {
        return (
            <ViewPanel>

                <form id="form-credentials" className="text-left pb-4" method="POST">
                    <hr />

                    <Input
                        title="Email address"
                        inputType="email"
                        elementId="email"
                    />

                    <Input
                        title="Password"
                        inputType="password"
                        elementId="password"
                    />

                    <Input
                        title="Password confirmation"
                        inputType="password"
                        elementId="confirm-password"
                    />

                    <div className="custom-control custom-checkbox noselect">
                        <input type="checkbox" className="custom-control-input" id="save-info" required />
                        <label className="custom-control-label" htmlFor="save-info">I accept the <a href="#">terms of service</a> &amp; <a href="#">privacy policy</a>.</label>
                    </div>

                    <hr />

                    <Link to="/" className="btn btn-outline-primary float-left mb-6p">Sing In</Link>
                    <button id="signin" type="submit" className="float-right btn btn-primary mb-6p">Create account</button>
                </form>
            </ViewPanel>
        );
    }

}

export default LoginPage;