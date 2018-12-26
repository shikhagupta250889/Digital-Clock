var twelveHourtimeFormat = false;
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
  var timeSuffix = addAmPm(Hr);
  if (twelveHourtimeFormat) Hr = changeTo12Hr(Hr);
  var nFormat = `${doubleDigit(Hr)}:${doubleDigit(Min)}:${doubleDigit(Sec)} ${timeSuffix}`;
  return nFormat;
}

function doubleDigit(x) {
  if (x <= 9) return `0${x}`;
  return x;
}

function changeTo12Hr(x) {
  if (x > 12 && x < 24)
    return (x - 12);
  return x;
}

function changeTimeFormat() {
  twelveHourtimeFormat = !twelveHourtimeFormat;
  changeButtonText();
}

function changeButtonText() {
 var buttonText = "Change to 12-Hour Mode";
  if (twelveHourtimeFormat) buttonText = "Change to 24-Hour Mode";
  document.querySelector('.toggleButton').innerHTML = buttonText;
}

function addAmPm(x) {
  if (twelveHourtimeFormat) {
    if (x >= 12) return `PM`;
    return `AM`;
  }
    return '';
}
// Date Functionality
