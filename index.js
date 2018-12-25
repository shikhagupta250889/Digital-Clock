function printTime() {
  document.getElementById('digitaltime').innerHTML = requiredTimeFormat();
}

function getCurrentTime() {
  return new Date();
}

function startClock() {
  setInterval(printTime, 1000);
}

function requiredTimeFormat() {
  var d = getCurrentTime();
  var Hr = d.getHours();
  var Min = d.getMinutes();
  var Sec = d.getSeconds();
  var nFormat = `${doubleDigit(Hr)}:${doubleDigit(Min)}:${doubleDigit(Sec)}`;
  return nFormat;
}

function doubleDigit(x) {
  if (x <= 9) return `0${x}`;
  return x;
}
