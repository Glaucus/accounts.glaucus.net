import React, { ReactNode } from 'react';
import logoWithNameImage from './name-logo.png';
import "./style.css";

class Logo extends React.Component {

    render(): ReactNode {
        return (
            <img
                className="logo noselect"
                alt="Glaucus logotype"
                src={logoWithNameImage}
            />
        );
    }

}

export default Logo;