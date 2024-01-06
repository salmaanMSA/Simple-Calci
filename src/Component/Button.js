import React from "react";
import '../css/button.css';


class Button extends React.Component {
    render (){
        const { text, color, bgColor, handleClick } = this.props;
        return (
            <div className="button-wrapper" style={{backgroundColor: bgColor, color: color}} 
            onClick={() => handleClick(text)}>
                {text}
            </div>
        );
    }
}

export default Button;