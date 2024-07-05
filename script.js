
// Update the current time in UTC
function updateUTCTime() {
    const now = new Date();
    const utcTimeString = now.toUTCString();
    document.getElementById('utc-time').textContent = "Current UTC time: " + utcTimeString;
}

// GEt the current day of the week
function displayDayOfWeek() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const dayOfWeek = days[now.getDay()];
    document.getElementById('day-of-week').textContent = "Current day: " + dayOfWeek;
}

updateUTCTime();
setInterval(updateUTCTime, 1000);

displayDayOfWeek();