import React, { ReactNode } from 'react';
import LoadingSpin from '../loadingSpin';

type AutoSignInState = {
    autoSigningIn: boolean
}

class AutoSignIn extends React.Component<{}, AutoSignInState> {

    state = {
        autoSigningIn: false
    }

    constructor(props: any) {
        super(props);
        this.connectBrowserAPI();
    }

    connectBrowserAPI() {
        /* Call Google Smart Lock */
        navigator.credentials.get({
            password: true,
            unmediated: false,
            mediation: 'optional',
            federated: {
                providers: [
                    'localhost'
                ]
            }
        }).then((cred) => {
            if (cred == null) return; // Stop if no credentials
            // auto login logic (with 6000ms delay)
        });

    }

    cancelAutoLogin() {
        this.setState({
            autoSigningIn: false
        });
    }

    render(): ReactNode {
        // Prevent showing the loading sping when not auto signing in.
        if (!this.state.autoSigningIn) return null;

        return (
            <span className="tip-span d-inline-block" tabIndex={0} data-placement="bottom" data-toggle="tooltip" title="" data-original-title="Click here to cancel Auto-Login.">
                <a id="loading-auto-login" className="tip" href="#cancelAutoLogin" onClick={() => this.cancelAutoLogin()}>
                    <LoadingSpin />
                </a>
            </span>
        );
    }

}

export default AutoSignIn;