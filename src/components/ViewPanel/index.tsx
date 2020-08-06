import React, { ReactNode } from 'react';
import Panel from '../../components/Panel';
import Logo from '../../components/logo';

class ViewPanel extends React.Component {

    render(): ReactNode {
        return (
            <Panel>
                <Logo />
                <div className="container box">
                    {this.props.children}
                </div>
            </Panel>
        );
    }

}

export default ViewPanel;