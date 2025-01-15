const ButtonContainer = ({
  buttonState,
  startStopWatch,
  stopStopWatch,
  resumeStopWatch,
  resetStopWatch,
}) => {
  return (
    <div className="button-container">
      {buttonState == "start" && (
        <button
          type="button"
          className="btn btn-primary af-start-btn"
          onClick={startStopWatch}
        >
          Start
        </button>
      )}

      {buttonState == "stop" && (
        <button
          type="button"
          className="btn btn-danger af-start-btn"
          onClick={stopStopWatch}
        >
          Stop
        </button>
      )}
      {buttonState == "resume-reset" && (
        <>
          <button
            type="button"
            className="btn btn-success af-start-btn"
            onClick={resumeStopWatch}
          >
            Resume
          </button>
          <button
            type="button"
            className="btn btn-danger af-start-btn"
            onClick={resetStopWatch}
          >
            Reset
          </button>
        </>
      )}
    </div>
  );
};

export default ButtonContainer;
