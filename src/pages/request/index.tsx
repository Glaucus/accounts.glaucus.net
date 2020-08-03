import React, { ReactNode } from 'react';
import Panel from '../../components/panel';
import Logo from '../../components/logo';
import Input from '../../components/input';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {

    render(): ReactNode {
        return (
            <Panel>
                <Logo />
                <div className="container box">
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
                </div>
            </Panel>
        );
    }

}

export default LoginPage;