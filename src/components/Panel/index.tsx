import React, { ReactNode } from 'react';
import "./style.css";

class Panel extends React.Component {

    render(): ReactNode {
        return (
            <div className="text-center mb-4 Panel-area">
                {this.props.children}
            </div>
        );
    }

}

export default Panel;