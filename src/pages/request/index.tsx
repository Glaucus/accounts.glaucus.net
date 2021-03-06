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

                    <hr />

                    <Link to="/" className="btn btn-outline-primary float-left mb-6p">Sing In</Link>
                    <button id="signin" type="submit" className="float-right btn btn-primary mb-6p">Request a password</button>
                </form>
            </ViewPanel>
        );
    }

}

export default LoginPage;