import React, { ReactNode } from 'react';

import "./style.css";
import loadingGif from './loading.gif';

class LoadingSpin extends React.Component {

    render(): ReactNode {
        return (
            <img className="loadingSpin-loading" src={loadingGif} />
        );
    }

}

export default LoadingSpin;