import React from 'react';
import Button from './Button';
import InputBox from './InputBox';
import { useState } from 'react';
import * as math from 'mathjs';

function App () {
    const [text, setText] = useState("");
    const [result, setResult] = useState("");

    const bgRegular = "#ece8e8";
    const bgSpecific = "#ec8004";
    const colorWhite = "white";
    const colorBlack = "black";

    const addToText = (val) => {
      setText((text) => text + val);
    }

    const clearText = () => {
      setText("");
      setResult("");
    }

    const addToOperator = (operator) => {
      // Check if the last character is an operator before appending a new one
      const lastChar = text.slice(-1);
      if (!['+', '-', '*', '/'].includes(lastChar)) {
        setText((text) => text + operator);
      }
    };

    const addToResult = () => {
      try {
        setResult(math.evaluate(text).toString());
      } catch (error) {
        setResult('Error');
      }
    }

    const deleteInput = () => {
      setText((text) => text.slice(0, -1));
    }

    return (
      <div className="App">
        <div className='calc-wrapper'>
          <InputBox text={text} result={result}/>
          <div className='row'>
            <Button text={"C"} color={colorBlack} bgColor={bgRegular} handleClick={clearText}/>
            <Button text={"DEL"} color={colorBlack} bgColor={bgRegular} handleClick={deleteInput}/>
            <Button text={"%"} color={colorBlack} bgColor={bgRegular} handleClick={addToOperator}/>
            <Button text={"/"} color={colorWhite} bgColor={bgSpecific} handleClick={addToOperator}/>
          </div>
          <div className='row'>
            <Button text={"7"} color={colorBlack} bgColor={bgRegular} handleClick={addToText}/>
            <Button text={"8"} color={colorBlack} bgColor={bgRegular} handleClick={addToText}/>
            <Button text={"9"} color={colorBlack} bgColor={bgRegular} handleClick={addToText}/>
            <Button text={"*"} color={colorWhite} bgColor={bgSpecific} handleClick={addToOperator}/>
          </div>
          <div className='row'>
            <Button text={"4"} color={colorBlack} bgColor={bgRegular} handleClick={addToText}/>
            <Button text={"5"} color={colorBlack} bgColor={bgRegular} handleClick={addToText}/>
            <Button text={"6"} color={colorBlack} bgColor={bgRegular} handleClick={addToText}/>
            <Button text={"-"} color={colorWhite} bgColor={bgSpecific} handleClick={addToOperator}/>
          </div>
          <div className='row'>
            <Button text={"1"} color={colorBlack} bgColor={bgRegular} handleClick={addToText}/>
            <Button text={"2"} color={colorBlack} bgColor={bgRegular} handleClick={addToText}/>
            <Button text={"3"} color={colorBlack} bgColor={bgRegular} handleClick={addToText}/>
            <Button text={"+"} color={colorWhite} bgColor={bgSpecific} handleClick={addToOperator}/>
          </div>
          <div className='row'>
            <Button text={"00"} color={colorBlack} bgColor={bgRegular} handleClick={addToText}/>
            <Button text={"0"} color={colorBlack} bgColor={bgRegular} handleClick={addToText}/>
            <Button text={"."} color={colorBlack} bgColor={bgRegular} handleClick={addToText}/>
            <Button text={"="} color={colorWhite} bgColor={bgSpecific} handleClick={addToResult}/>
          </div>  
        </div>
      </div>
    );  
}

export default App;
