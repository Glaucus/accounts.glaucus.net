import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import Panel from '../../components/Panel';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import AutoSignIn from '../../components/AutoSignIn';

class LoginPage extends React.Component {

    render(): ReactNode {
        return (
            <Panel>
                <Logo />
                <AutoSignIn />
                <div className="container box">
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
                        >
                            <Link to="/request">
                                <small id="emailHelp" className="text-right form-text text-muted">
                                    Forget your password?
                                </small>
                            </Link>
                        </Input>

                        <hr />

                        <Link to="/register" className="btn btn-outline-primary float-left mb-6p">Create account</Link>
                        <button id="signin" type="submit" className="float-right btn btn-primary mb-6p">Sign in</button>
                    </form>
                </div>
            </Panel>
        );
    }

}

export default LoginPage;