import React from "react";
import '../css/InputBox.css';


class InputBox extends React.Component {
    render () {
        const { text, result } = this.props;
        return (
            <div className="input-wrapper">
                <div className="result">
                    <h1>{result}</h1>
                </div>
                <div className="text">
                    <h3>{text}</h3>
                </div>
            </div>
        );
    }
}

export default InputBox;