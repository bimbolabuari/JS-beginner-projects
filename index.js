const Watch = () => {
  // Get DOM elements

  const stopWatch = document.querySelector('.stop');
  const startWatch = document.querySelector('.start');
  const resetWatch = document.querySelector('.reset');
  const timer = document.querySelector('.timer');
  let miliSeconds = document.querySelector('.miliseconds');
  let seconds = document.querySelector('.seconds');
  let minutes = document.querySelector('.minutes');
  let myMiliSeconds = 00;
  let mySeconds = 00;
  let myMinutes = 00;

  // function to run time
  function timeLoop() {
    myMiliSeconds++;
    if (myMiliSeconds < 9 && myMiliSeconds > 1) {
      miliSeconds.textContent = '0' + myMiliSeconds;
    } else if (myMiliSeconds > 9) {
      miliSeconds.textContent = myMiliSeconds;
    }

    if (myMiliSeconds > 99) {
      mySeconds++;
      seconds.textContent = '0' + mySeconds;
      myMiliSeconds = 0;
      miliSeconds.textContent = '0' + 0;
    }

    if (mySeconds > 9) {
      seconds.textContent = mySeconds;
    }

    if (mySeconds === 60) {
      myMinutes++;
      minutes.textContent = myMinutes;
      mySeconds = 0;
      seconds.textContent = '0' + 0;
      myMiliSeconds = 0;
      miliSeconds.textContent = '0' + 0;
    }
    if (myMinutes > 9) {
      myMiliSeconds = '00';
      mySeconds = '00';
      myMinutes = '0';
      miliSeconds.textContent = myMiliSeconds;
      seconds.textContent = mySeconds;
      minutes.textContent = myMinutes;
    }
  }
  // start watch
  let timeRun;
  startWatch.addEventListener('click', () => {
    timeRun = setInterval(timeLoop, 10);
  });
  stopWatch.addEventListener('click', () => {
    clearInterval(timeRun);
  });

  resetWatch.addEventListener('click', () => {
    clearInterval(timeRun);
    myMiliSeconds = '00';
    mySeconds = '00';
    myMinutes = '0';
    miliSeconds.textContent = myMiliSeconds;
    seconds.textContent = mySeconds;
    minutes.textContent = myMinutes;
  });
};
Watch();
