import { useRef, useState } from "react";
import ButtonContainer from "./components/ButtonContainer";
import TimeShow from "./components/TimeShow";

function App() {
  let timer = useRef(); // if let time = 0 , on app rendering it reset to 0. So using useRef()
  let [hours, setHours] = useState(0);
  let [minutes, setMintues] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [buttonState, setStatus] = useState("start"); // 3  state => initial, running, pause

  const updateTimer = () => {
    setSeconds((prevSeconds) => {
      if (prevSeconds === 59) {
        setMintues((prevMinutes) => {
          if (prevMinutes === 59) {
            setHours((prevHours) => prevHours + 1);
            return 0;
          }
          return prevMinutes + 1;
        });
        return 0;
      }
      return prevSeconds + 1;
    });
  };

  function startStopWatch() {
    if (!timer.current) {
      timer.current = setInterval(updateTimer, 1000);
      setStatus("stop");
    }
    updateTimer();
  }

  function stopStopWatch() {
    clearInterval(timer.current);
    timer.current = null;
    setStatus("resume-reset");
  }

  function resetStopWatch() {
    clearInterval(timer.current);
    timer.current = null;
    setSeconds(0);
    setMintues(0);
    setHours(0);
    setStatus("start");
  }

  function resumeStopWatch() {
    startStopWatch();
    setStatus("stop");
  }

  return (
    <>
      <div className="stopwatch-main-container">
        <TimeShow hours={hours} minutes={minutes} seconds={seconds}></TimeShow>
        <ButtonContainer
          buttonState={buttonState}
          startStopWatch={startStopWatch}
          stopStopWatch={stopStopWatch}
          resumeStopWatch={resumeStopWatch}
          resetStopWatch={resetStopWatch}
        ></ButtonContainer>
      </div>
    </>
  );
}

export default App;
