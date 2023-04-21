function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let buttons = document.getElementsByTagName('input')
    for (let i = 1; i < buttons.length; i+=2) {
        buttons[i].addEventListener('click', function() {
            if (i === 1) {
                // Days
               convertFromDays();
            }
            if (i === 3) {
                // Hours
                convertFromHours();
            }
            if (i ===5) {
                // Minutes
                convertFromMinutes();
            }
            if (i === 7) {
                // Seconds
                convertFromSeconds();
            }
        })
    }

    function convertFromDays() {
        hours.value = days.value * 24;
        minutes.value = hours.value * 60;
        seconds.value = minutes.value * 60
    }
    function convertFromHours() {
        days.value = hours.value / 24;
        minutes.value = hours.value * 60;
        seconds.value = minutes.value * 60;
    }
    function convertFromMinutes() {
        hours.value = minutes.value / 60;
        days.value = hours.value / 24;
        seconds.value = minutes.value * 60;
    }
    function convertFromSeconds() {
        minutes.value= seconds.value / 60;
        hours.value = minutes.value / 60;
        days.value = hours.value / 24;
    }
}