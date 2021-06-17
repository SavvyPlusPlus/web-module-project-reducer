import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers/index';
import { applyNumber, changeOperator, clearDisplay, memoryPlus, memoryRecall, clearMemory } from './actions/index';
// import { addOne } from './actions/index';
import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  // const handleAdd = () => {
  //   dispatch(addOne())
  // }

  const handleApply = (number) => {
    dispatch(applyNumber(number));
  }

  const handleOperator = (operator) => {
    dispatch(changeOperator(operator));
  }

  const handleClear = () => {
    dispatch(clearDisplay())
  }

  const handlePlus = () => {
    dispatch(memoryPlus())
  }

  const handleRecall = () => {
    dispatch(memoryRecall())
  }


  const handleMemClear = () => {
    dispatch(clearMemory())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handlePlus} />
              <CalcButton value={"MR"} onClick={handleRecall}/>
              <CalcButton value={"MC"} onClick={handleMemClear}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApply(1)} value={1}/>
              <CalcButton onClick={() => handleApply(2)} value={2}/>
              <CalcButton onClick={() => handleApply(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton  onClick={() => handleApply(4)} value={4}/>
              <CalcButton  onClick={() => handleApply(5)} value={5}/>
              <CalcButton  onClick={() => handleApply(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton  onClick={() => handleApply(7)} value={7}/>
              <CalcButton  onClick={() => handleApply(8)} value={8}/>
              <CalcButton  onClick={() => handleApply(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperator("+")}/>
              <CalcButton value={"*"} onClick={() => handleOperator("*")}/>
              <CalcButton value={"-"} onClick={() => handleOperator("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClear} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
