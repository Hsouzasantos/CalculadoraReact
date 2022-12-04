
import {Input} from './components/Input'
import {Button} from './components/Button'
import {Container, Content, Row, Column} from './styles'
import { useState } from 'react';


function App() {

  //states
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  //functions 
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === "0" ? "" : prev}${number}`)
  }
  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }
  const handleSum = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }
  const handleSub = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation('');
    }
  }
  const handleMul = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const mul = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mul));
      setOperation('');
    }
  }
  const handleDiv = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setOperation('');
    }
  }
  const handleEqual = () => {
    if(firstNumber != '0' && operation != '' && currentNumber != '0'){
      switch(operation){
        case '+':
          handleSum();
          break;
        case '-':
          handleSub();
          break;
        case '*':
          handleMul();
          break;
        case '/':
          handleDiv();
          break;
        default:
          break;
      }
    }
  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label='C' onClick={handleClear}/>
          <Button label='CE' onClick={handleClear}/>
          <Button label='*' onClick={handleMul}/>
          <Button label='/' onClick={handleDiv}/>
        </Row>
        <Row>
          <Button label='7' onClick={() => {handleAddNumber('7')}}/>
          <Button label='8' onClick={() => {handleAddNumber('8')}}/>
          <Button label='9' onClick={() => {handleAddNumber('9')}}/>
          <Button label='-' onClick={handleSub}/>
        </Row>
        <Row>
          <Button label='4' onClick={() => {handleAddNumber('4')}}/>
          <Button label='5' onClick={() => {handleAddNumber('5')}}/>
          <Button label='6' onClick={() => {handleAddNumber('6')}}/>
          <Button label='+' onClick={handleSum}/>
        </Row>
        <Row>
          <Button label='1' onClick={() => {handleAddNumber('1')}}/>
          <Button label='2' onClick={() => {handleAddNumber('2')}}/>
          <Button label='3' onClick={() => {handleAddNumber('3')}}/>
          <Button label='=' onClick={handleEqual}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
