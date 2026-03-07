import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const messages = [
  "Learn React ",
  "Apply for jobs",
  "Invest your new income"
]

function App() {

  const [step, setStep] = useState(1)

  function handleNext (){
    if (step <3 ) {
      // setStep(step +1)
      setStep((c) => c +1)

    }
    
  }

  function handlePrev () {
    if ( step >1) {
      // setStep(step -1)
      setStep((c) => c -1)
    }
    
  }

  // console.log(step)

  // let step =1
  return (
    <div className="App">
      <div className='steps'>

        <div className='numbers'>
          <div className={step >= 1? "active" : "inactive"}>1</div>
          <div className={step >= 2? "active" : "inactive"}>2</div>
          <div className={step >= 3? "active" : "inactive"}>3</div>
        </div>

        <div className='message'>
          <div>STEP: {step} </div>
          <div>{messages [step -1]}</div>
          {/* <h1>Press Q</h1> */}

        </div>

        <div className='btns'>
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>

      </div>



    </div>
  );
}

export default App;
