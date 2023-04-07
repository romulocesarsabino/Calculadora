import React, { useState } from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

const Calculator = () => {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState(0);

  const inputNum = (e) => {
    var input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  };

  const clear = () => {
    setNum(0);
  };

  const porcentage = () => {
    setNum(num / 100);
  };

  const changeSign = () => {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  };

  const calculate = () => {
    const oldNumNumber = parseFloat(oldNum.replace(',', '.'));
    const numNumber = parseFloat(num.replace(',', '.'));

    if (operator === '/') {
      setNum((oldNumNumber / numNumber).toLocaleString('pt-BR'));
      //setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === 'x') {
      setNum((oldNumNumber * numNumber).toLocaleString('pt-BR'));
      //setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === '-') {
      setNum((oldNumNumber - numNumber).toLocaleString('pt-BR'));
      //setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === '+') {
      setNum((oldNumNumber + numNumber).toLocaleString('pt-BR'));
      //setNum(parseFloat(oldnum) + parseFloat(num));
    }
  };

  const operatorHandler = (e) => {
    const operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  };

  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wraper">
          <Box m={2} />
          <h1 className="name">CALCULADORA</h1>
          <h1 className="result">{num}</h1>
          <button onClick={clear} className="lighter-gray">
            AC
          </button>
          <button onClick={changeSign} className="lighter-gray">
            +/-
          </button>
          <button onClick={porcentage} className="lighter-gray">
            %
          </button>
          <button className="orange" onClick={operatorHandler} value="/">
            /
          </button>
          <button className="gray" onClick={inputNum} value={7}>
            7
          </button>
          <button className="gray" onClick={inputNum} value={8}>
            8
          </button>
          <button className="gray" onClick={inputNum} value={9}>
            9
          </button>
          <button className="orange" onClick={operatorHandler} value="x">
            X
          </button>
          <button className="gray" onClick={inputNum} value={4}>
            4
          </button>
          <button className="gray" onClick={inputNum} value={5}>
            5
          </button>
          <button className="gray" onClick={inputNum} value={6}>
            6
          </button>
          <button className="orange" onClick={operatorHandler} value="-">
            -
          </button>
          <button className="gray" onClick={inputNum} value={1}>
            1
          </button>
          <button className="gray" onClick={inputNum} value={2}>
            2
          </button>
          <button className="gray" onClick={inputNum} value={3}>
            3
          </button>
          <button className="orange" onClick={operatorHandler} value="+">
            +
          </button>
          <button
            style={{ width: '6.5em', textAlign: 'left', paddingLeft: '1em' }}
            className="gray"
            onClick={inputNum}
            value={0}
          >
            0
          </button>

          <button className="gray" onClick={inputNum} value={'.'}>
            ,
          </button>
          <button className="orange" onClick={calculate}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Calculator;
