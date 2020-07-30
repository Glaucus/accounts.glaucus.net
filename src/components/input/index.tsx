import React, { ReactNode } from 'react';
import "./style.css"

type InputProps = {
    elementId: string,
    inputType: string,
    title: string
}

class Input extends React.Component<InputProps, {}> {

    render(): ReactNode {
        const { elementId, inputType, title } = this.props;
        return (
            <div className="form-group">
                <label id={`${elementId}-label`} htmlFor={elementId}>{title}</label>
                <input type={inputType} className="form-control" name={elementId} id={elementId} aria-describedby={`Please enter ${title}`} placeholder={`Enter ${title}`} required />
                {this.props.children}
            </div>
        );
    }

}

export default Input;