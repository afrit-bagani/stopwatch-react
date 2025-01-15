const TimeShow = ({ hours, minutes, seconds }) => {
  const formatTime = (time) => {
    return (time = time < 10 ? "0" + time : time);
  };

  return (
    <div className="time-show-container">
      <span className="hours">{formatTime(hours)}</span>:
      <span className="mintues">{formatTime(minutes)}</span>:
      <span className="seconds">{formatTime(seconds)}</span>
    </div>
  );
};

export default TimeShow;
