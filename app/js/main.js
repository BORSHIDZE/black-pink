$(function name(params) {

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);

    return {
      total,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000)
  }

  const deadline = new Date(Date.parse(new Date()) + 3 * 60 * 60 * 1000);
  initializeClock('clockdiv', deadline);



});

$(function name(params) {

  $('.banner__close').on('click', function () {
    $('.banner').addClass('active');
  })
});

$(function name(params) {

  $('.burger').on('click', function () {
    $('.menu__list').removeClass('menu__list-active');
    $('.burger').removeClass('burger-active');
    
    $('.menu__list').addClass('menu__list-active');
    $('.burger').addClass('burger-active');
  });

});



$(function name(params) {

  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animate__animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  )
  wow.init();
});





