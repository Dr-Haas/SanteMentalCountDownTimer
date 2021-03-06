import React from 'react';
import moment from 'moment';

const Countdown = ({ countdownTimer, unixEndDate }) => {

  return (
    <div className="countdown">
      <div className="card">
        <div className="countdown-value">{countdownTimer.days}</div>
        <div className="countdown-unit">Jours</div>
      </div>
      <div className="card">
        <div className="countdown-value">{countdownTimer.hours}</div>
        <div className="countdown-unit">Heurs</div>
      </div>
      <div className="card">
        <div className="countdown-value">{countdownTimer.mins}</div>
        <div className="countdown-unit">Minutes</div>
      </div>
      <div className="card">
        <div className="countdown-value">{countdownTimer.secs}</div>
        <div className="countdown-unit">Secondes</div>
      </div>
      <p>Counting down to {moment.unix(unixEndDate).format('dddd, MMMM Do, YYYY | h:mm A')}</p>
    </div>
  );
}

export default Countdown;